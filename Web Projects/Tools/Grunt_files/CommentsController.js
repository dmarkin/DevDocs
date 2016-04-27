(function(global){
  function CommentsController(){
    this.comment_form = $('form.add-comment-form');
    moment.lang('ru');
    if(this.comment_form.length>0){
      marked.setOptions({
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true
      });
      var source   = $("#comment-template").html();
      this.comment_template = Handlebars.compile(source);
      this.preview = null;
      this.textarea = this.comment_form.find('textarea');
      this.user_login = this.comment_form.find('a.author').text();
      this.user_url = this.comment_form.find('a.author').attr('href');
      this.user_img = this.comment_form.find('img.avatar').attr('src');
      this.issue = this.comment_form.find('input[name="issue"]').val();
      this.repository = this.comment_form.find('input[name="repository"]').val();
      this.textarea.on('keyup',$.proxy(this.createPreview,this));
      this.comment_form.on('submit',$.proxy(this.submitComment,this));
    }
    this.recountTimeTimer = window.setInterval($.proxy(this.recountTime,this),60000);
    this.recountTime();
  }

  CommentsController.prototype.recountTime = function(event){
    var time = $('.comments time'),
        index = time.length,
        datetime = null,
        commentTime = null;

    while(index--){
      datetime = time[index].getAttribute('datetime');
      commentTime = moment(datetime);
      if(moment().diff(commentTime, 'hours', true)>3){
        $(time[index]).text(moment(datetime).calendar());
      }else{
        $(time[index]).text(moment(datetime).fromNow());
      }
    }
  };

  CommentsController.prototype.submitComment = function(event){
    event.preventDefault();
    this.comment_form.addClass('submit');
    $.post(this.comment_form.attr('action'),this.comment_form.serialize()).success($.proxy(this.submitCommentSuccess,this));
  };

  CommentsController.prototype.submitCommentSuccess = function(responce){
    responce = $.parseJSON(responce);
    this.comment_form.removeClass('submit');
    if(typeof responce.error !== 'undefined'){
      return;
    }
    this.comment_form[0].reset();
    this.comment_form.prev().fadeTo(1).removeClass('preview').attr('data-comment',responce.id).find('time').attr('datetime',responce.created_at);
  };

  CommentsController.prototype.createPreview = function(event){
    var val = this.textarea.val().trim();
    if(val.length==0){
      if(this.preview!==null){
        this.preview.parents('.comment').remove();
        this.preview = null;
      }
      return;
    }
    if(this.preview!==null){
      this.preview.html(marked(val));
      this.preview.find('code').each(function(i, e) {hljs.highlightBlock(e, null, true)});
      return;
    }
    var now = moment();
    var comment = this.comment_template({
      issue: this.issue,
      user: this.user_url,
      img: this.user_img,
      login: this.user_login,
      mashinetime: now.format("YYYY-MM-DDTHH:mm:ssZ"),
      time: 'Меньше минуты назад',
      comment: marked(val)
    });
    this.comment_form.before(comment);
    this.preview = this.comment_form.prev().find('.body');
    this.preview.find('code').each(function(i, e) {hljs.highlightBlock(e, null, true)});
  };

  function onDomReady(){
    new CommentsController;
  }

  $(document).ready(onDomReady);
})(this)
