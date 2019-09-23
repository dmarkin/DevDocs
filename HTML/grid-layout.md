**Gallery Responsive Example**

```html
<a href="https://codepen.io/lukaszmn/pen/YoOqbj" target="_blank">Step by step</a>

<div class="gallery">
  <div class="item"><img src="https://picsum.photos/600/400?image=10" /></div>
  <div class="item"><img src="https://picsum.photos/600/400?image=11" /></div>
  <div class="item"><img src="https://picsum.photos/600/400?image=12" /></div>
  <div class="item"><img src="https://picsum.photos/600/400?image=13" /></div>
  <div class="item"><img src="https://picsum.photos/600/400?image=14" /></div>
  <div class="item"><img src="https://picsum.photos/600/400?image=15" /></div>
  <div class="item"><img src="https://picsum.photos/600/400?image=16" /></div>
  <div class="item"><img src="https://picsum.photos/600/400?image=17" /></div>
  <div class="item"><img src="https://picsum.photos/600/400?image=18" /></div>
  <div class="item"><img src="https://picsum.photos/600/400?image=19" /></div>
  <div class="item"><img src="https://picsum.photos/600/400?image=20" /></div>
  <div class="item"><img src="https://picsum.photos/600/400?image=22" /></div>
  <div class="item"><img src="https://picsum.photos/600/400?image=23" /></div>
</div>
  
```

```scss
.gallery {
  display: grid;
  grid-gap: 10px;

  /* fill the page's width with columns, each having from about 200 to 400 px */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  
  /* first row's height: 250px, second row's: 150px, third row's: 250px, and so on */
  grid-auto-rows: 250px 150px;
  
  /* from MDN: "fill in holes earlier in the grid, if smaller items come up later" */
  grid-auto-flow: dense;
}

.item {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* for larger screens... */
  @media (min-width: 480px) {
    
    /* first item will have size 2x2 */
    &:first-child {
      grid-area: 1 / 1 / span 2 / span 2;
    }

    /* and every third item will have size 2x1 */
    &:nth-child(3n) {
      grid-column: span 2;
    }
 
  }
}
```

**Gallery Responsive Example 2**

```html
<div class="photo-details">
	<div class="photo"><img src="https://picsum.photos/300/200?image=12" /></div>
	<div class="avatar"><img src="https://picsum.photos/50/50?image=12" /></div>
	<div class="author">John Smith</div>
	<div class="date">2018-10-03</div>
	<div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
  <div class="like">&hearts;</div>
</div>
```

```scss
body {
  font-family: Arial;
}

.photo-details {

  /* grid */

  max-width: 800px;
	display: grid;
	grid-template-columns: 50% min-content 1fr max-content;
	grid-template-rows: 0 min-content 1fr min-content;
	grid-gap: 10px;
  align-items: center;
	grid-template-areas:
    "photo . . ." /* add padding */
		"photo avatar author date"
		"photo . description description"
		"photo . . like";
		
	@media (max-width: 700px) {
		grid-template-columns: min-content 1fr 1fr;
		grid-template-areas:
      ". . ." /* add padding */
			"avatar author author"
			"photo photo photo"
			"description description description"
			"date date like";
    padding: 0;
	}

	.photo { grid-area: photo; align-self: start; }
	.description { grid-area: description; }
	.avatar { grid-area: avatar; }
	.author { grid-area: author; }
	.date { grid-area: date; }
	.like { grid-area: like; justify-self: right; }
 
  /* styling */
  
  //> * { outline: 1px solid black; }
  border: 1px solid #e8e8e8;
  box-shadow: 0 0 8px 0px #dcdcdc;
  padding-right: 10px;

  .photo, .photo img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .avatar img {
    border-radius: 50%;
  }
  .author {
    font-size: 20px;
    color: #706ac1;
  }
  .date {
    font-size: 13px;
    color: #999;
  }
  .description {
    font-size: 16px;
  }
  .like {
    font-size: 30px;
  }

  @media (max-width: 700px) {
    .avatar, .description, .date { padding-left: 10px; }
    .description, .like { padding-right: 10px; }
  }
}
```

**Gallery Example (works at IE)**

```html
<div class="row-container">
   <div class="row-section">
      <div class="grid-col-1">
         <div class="inner">
         <img class="committee-pic" src="http://checkoff.grainfoodsfoundation.org/wp-content/uploads/2018/04/Cathy-Calhoun-Weber-Shandwick-web-sq-web.jpg" alt="" style="object-fit: cover; max-width:100%;">
         <div class="inner-text">
         <h5>Cathy Calhoun</h5>
         <h6>Chief Client Officer</h6>
         <p><strong>Weber Shandwick</strong></p>
         <a href="mailto:ccalhoun@webershandwick.com" target="_top"><p><strong>ccalhoun@webershandwick.com</strong></p></a>
         </div>
        </div>
      </div>
      <div class="grid-col-2">
        <div class="inner">
         <img class="committee-pic" src="http://checkoff.grainfoodsfoundation.org/wp-content/uploads/2018/04/Janet-Helm-Weber-Shandwick-web-js-sq-edit-web.jpg" alt=""  style="object-fit: cover; max-width:100%;">
         <div class="inner-text">
         <h5>Janet Helm</h5>
         <h6>Chief Food and Nutrition Strategist</h6>
         <p><strong>Weber Shandwick</strong></p>
         <p><a href="mailto:jhelm@webershandwick.com" target="_top"><p><strong>jhelm@webershandwick.com</strong></p></a>
         </div>
         </div>
      </div>
      <div class="grid-col-3">
        <div class="inner">
         <img class="committee-pic" src="http://checkoff.grainfoodsfoundation.org/wp-content/uploads/2018/04/Tom-Nagle-Statler-Nagle-web-js-sq-web.jpg" alt="" style="object-fit: cover; max-width:100%;">
         <div class="inner-text">
         <h5>Tom Nagle</h5>
         <h6>Managing Partner</h6>
         <p><strong>Statler Nagle</strong></p>
         <a href="mailto:tom@statlernagle.com" target="_top"><p><strong>tom@statlernagle.com</strong></p></a>
        </div>
        </div>
      </div>
      <div class="grid-col-4">
        <div class="inner">
         <img class="committee-pic" src="http://checkoff.grainfoodsfoundation.org/wp-content/uploads/2018/04/Jon-Rosborough-Statler-Nagle-web-js-sq-web.jpg" alt="" style="object-fit: cover; max-width:100%;">
         <div class="inner-text">
         <h5>Jon Rosborough</h5>
         <h6>Program Director</h6>
         <p><strong>Statler Nagle</strong></p>
         <a href="mailto:jon@statlernagle.com" target="_top"><p><strong>jon@statlernagle.com</strong></p></a>
         </div>
        </div>
      </div>
   </div>
   <div class="row-section">
      <div class="grid-col-1">
        <div class="inner">
         <img class="committee-pic" src="http://checkoff.grainfoodsfoundation.org/wp-content/uploads/2018/04/Jon-DeWitt-web-js-sq-edit-web.jpg" alt="" style="object-fit: cover; max-width:100%;">
         <div class="inner-text">
         <h5>Jon DeWitt</h5>
         <h6>Partner</h6>
         <p><strong>Artemis Strategy Group</strong></p>
         <a href="mailto:jdewitt@artemissg.com " target="_top"><p><strong>jdewitt@artemissg.com </strong></p></a>
         </div>
        </div>
      </div>
      <div class="grid-col-2">
        <div class="inner">
         <img class="committee-pic" src="http://checkoff.grainfoodsfoundation.org/wp-content/uploads/2018/04/Jamie-Rubin-Campbell-Ewald-web-gs-sq-edit-web.jpg" alt="" style="object-fit: cover; max-width:100%;"></p>
         <div class="inner-text">
         <h5>Jamie Rubin</h5>
         <h6>SVP Managing Director, Media</h6>
         <p><strong>Campbell Ewald</strong></p>
         <a href="mailto:Jamie.Rubin@c-e.com" target="_top"><p><strong>Jamie.Rubin@c-e.com</strong></p></a>
         </div>
        </div>
      </div>
      <div class="grid-col-3">
        <div class="inner">
         <img class="committee-pic" src="http://checkoff.grainfoodsfoundation.org/wp-content/uploads/2018/04/Doug-Adams-Prime-Consulting-web-gs-sq-web.jpg" alt="" style="object-fit: cover; max-width:100%;">
         <p><div class="inner-text">
         <h5>Doug Adams</h5>
         <h6>President and Founder</h6>
         <p><strong>Prime Consulting</strong></p>
         <a href="mailto:WWatkinson@WatkinsonMiller.com" target="_top"><p><strong>WWatkinson@WatkinsonMiller.com</strong></p></a>
         </div>
        </div>
      </div>
      <div class="grid-col-4">
        <div class="inner">
         <img class="committee-pic" src="http://checkoff.grainfoodsfoundation.org/wp-content/uploads/2018/04/Wayne-Watkinson-Watkinson-and-Miller-web-gs-sq-web.jpg" alt="" style="object-fit: cover; max-width:100%;">
         <div class="inner-text">
         <h5>Wayne Watkinson</h5>
         <h6>Partner</h6>
         <p><strong>Watkinson Miller PLLC</strong></p>
         <a href="mailto:WWatkinson@WatkinsonMiller.com" target="_top"><p><strong>WWatkinson@WatkinsonMiller.com</strong></p></a>
         </div>
        </div>
      </div>
   </div>
</div>
```

```css
.row-section {
     display: -ms-grid;
     display: grid;
     -ms-grid-columns: 25% 25% 25% 25%;
     grid-template-columns: 1fr 1fr 1fr 1fr;
}
.grid-col-1, .grid-col-2, .grid-col-3, .grid-col-4 { 
     -ms-grid-column-span: 1;
     width: 90%;
     padding:10%;
}
.inner-text {
  width: 98%;
  padding:2%;
}
.inner-text p {
  word-break: break-all;
}
.grid-col-1 {
     grid-column: 1/2 ;
     -ms-grid-column: 1;
     -ms-grid-column-span: 1;
}
.grid-col-2 {
     grid-column: 2/3 ;
     -ms-grid-column: 2;
     -ms-grid-column-span: 1;
}
.grid-col-3 {
     grid-column: 3/4 ;
     -ms-grid-column: 3;
     -ms-grid-column-span: 1;
}
.grid-col-4 {
     grid-column: 4/5 ;
     -ms-grid-column: 4;
     -ms-grid-column-span: 1;
}
@media only screen and (max-width: 700px) {
    .row-section {
     -ms-grid-columns: 50% 50%;
     grid-template-columns: 50% 50%;
    }
     .grid-col-1 {
         grid-column: 1/2 !important;
         -ms-grid-column: 1 !important;
         -ms-grid-column-span: 1 !important;
    }
      .grid-col-2 {
         grid-column: 2/3 !important;
         -ms-grid-column: 2 !important;
         -ms-grid-column-span: 1 !important;
    }
      .grid-col-3 {
          grid-column: 1/2 !important;
         -ms-grid-column: 1 !important;
         -ms-grid-column-span: 1 !important;
    }
      .grid-col-4  {
         grid-column: 2/3 !important;
         -ms-grid-column: 2 !important;
         -ms-grid-column-span: 1 !important;
    }
}
```