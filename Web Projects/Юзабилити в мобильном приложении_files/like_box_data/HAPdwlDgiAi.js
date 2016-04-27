/*!CK:2085701641!*//*1438697736,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["4++FI"]); }

__d("CctaTestIDs",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={CCTA_VIEWER_UNIT_TESTID:"ccta_viewer_unit_testid",CCTA_TYPE_SELECTOR_TESTID:"ccta_type_selector_testid",CCTA_TYPE_SELECTOR_OPTION_TESTID_PREFIX:"ccta_type_selector_option_testid_",CCTA_CANCEL_BUTTON_TESTID:"ccta_cancel_button_testid",CCTA_SAVE_BUTTON_TESTID:"ccta_save_button_testid",CCTA_WEB_URI_TESTID:"ccta_web_uri_testid",CCTA_EDIT_MENU_TESTID:"ccta_edit_menu_testid",CCTA_SWITCH_TO_APP_BUTTON_TESTID:"ccta_switch_to_app_button_testid",CCTA_ANDROID_APPS_DROPDOWN_TESTID:"ccta_android_apps_dropdown_testid",CCTA_ANDROID_APPS_DROPDOWN_WEBSITE_OPTION_TESTID:"ccta_android_apps_dropdown_website_option_testid",CCTA_ANDROID_APPS_DROPDOWN_APP_OPTION_TESTID:"ccta_android_apps_dropdown_app_option_testid"};},null);
__d("CustomCallToActionConstants",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={WEB:"CUSTOM_CTA_PLATFORM_WEB",IOS:"CUSTOM_CTA_PLATFORM_IOS",ANDROID:"CUSTOM_CTA_PLATFORM_ANDROID",PRIMARY_LINK:"customCTAEditPrimaryLink",PRIMARY_LINK_TYPE:"customCTAEditPrimaryLinkType",FALLBACK_LINK_TYPE:"customCTAEditFallbackLinkType",FALLBACK_LINK:"customCTAEditFallbackLink",APP_ID:"appID",COVER_PHOTO_SURFACE:"coverPhoto",HOVER_CARD_SURFACE:"hoverCard",PAGE_PLUGIN_SURFACE:"pagePlugin",ADMIN_MENU_TEST_LINK:"adminMenuTestLink",SKIP_PROMOTION:"skip_promotion",GK_OPENTABLE:"ccta_open_table",GK_BYPASS:"pages_custom_cta_bypass",GK_PID:"pages_custom_cta_pid_2",GK_UID:"pages_custom_cta_uid",GK_CONTEXTUAL_ROW_UID:"pages_custom_cta_contextual_row_uid",GK_CONTEXTUAL_ROW_ADMIN_UID:"pages_custom_cta_contextual_row_admin_uid",GK_FOLLOW_BUTTON_IN_LIKE_DROPDOWN:"pages_follow_button_in_like_dropdown",GK_HOVER_CARD:"custom_cta_hover_card_uid",GK_SHOW_IN_SPRINGBOARD_UID:"pages_custom_cta_show_in_springboard_uid",GK_ADMIN_UID:"custom_cta_admin_uid",GK_PROMOTION_ADMIN_UID:"custom_cta_promotion_admin_uid_2",GK_CUSTOM_CTA_CALLOUT:"custom_cta_callout",GK_SHOW_VIEWER_UNIT_IN_LOGGED_OUT_VIEW:"custom_cta_show_viewer_unit_when_logged_out",NECTAR_APP_NAME:"custom_cta",GK_CCTA_NEW_DIALOG:"ccta_new_dialog",GK_CCTA_CHARITY_DONATE:"ccta_donate_now",GK_CCTA_MESSENGER:"ccta_messenger",GK_CCTA_PROMOTION_DIALOG:"ccta_promotion_dialog",OPEN_APP_ID:1,OPEN_WEBSITE_ID:2,TEST_ID_LANDING_PAGE_UNIT:"ccta_landing_page_unit"};},null);
__d("PageCallToActionDestinationTypes",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={NONE:"NONE",APP_DEEPLINK:"APP_DEEPLINK",CALL_PAGE:"CALL_PAGE",DONATE:"DONATE",FACEBOOK_APP:"FACEBOOK_APP",LEAD_GEN:"LEAD_GEN",MESSENGER:"MESSENGER",PHONE_CALL:"PHONE_CALL",STORE_FRONT:"STORE_FRONT",WEBSITE:"WEBSITE"};},null);
__d("UFILazyActorSelector.react",["BootloadedComponent.react","JSResource","React","ActorSelectorPlaceholder.react"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=i.createClass({displayName:"UFILazyActorSelector",getInitialState:function(){return {initialized:false};},_onActivate:function(l){this.setState({shouldFocus:l,initialized:true});},render:function(){return this.state.initialized?i.createElement(g,i.__spread({bootloadPlaceholder:i.createElement(j,null),bootloadLoader:h('UFIActorSelector.react'),focusOnInit:this.state.shouldFocus},this.props)):i.createElement(j,{onActivate:this._onActivate});}});e.exports=k;},null);
__d("XUIDialogConfirmButton.react",["React","XUIDialogButton.react","fbt"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=g.createClass({displayName:"XUIDialogConfirmButton",render:function(){return (g.createElement(h,g.__spread({},this.props,{action:"confirm",label:i._("\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c")})));}});e.exports=j;},null);
__d("CustomCTAConstants",["fbt","CustomCallToActionConstants","CustomCallToActionTypes"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=b('CustomCallToActionTypes').TYPES,j={NO_DIALOG:'CUSTOM_CTA_DIALOG_NONE',DELETE_DIALOG:'CUSTOM_CTA_DIALOG_DELETE',EDIT_DIALOG:'CUSTOM_CTA_DIALOG_EDIT',PROMOTE_DIALOG:'CUSTOM_CTA_DIALOG_PROMOTE',UPDATE_ALERT_DIALOG:'CUSTOM_CTA_DIALOG_UPDATE_ALERT',OPEN_APP_ID:"1",OPEN_WEBSITE_ID:"2",SHOW_FLYOUT:'SHOW_FLYOUT',CREATE_DIALOG_WIDTH:778,CREATE_DIALOG_HEIGHT:504,PREVIEW_WIDTH:436,PREVIEW_HEIGHT:416,NEW_PREVIEW_WIDTH:412,NEW_PREVIEW_HEIGHT:346,SELECTOR_WIDTH:194,URI_TRUNCATE_LENGTH:30,WEBSITE_BAR_ITEM:'Website',IPHONE_BAR_ITEM:'iPhone',ANDROID_BAR_ITEM:'Android',CREATE_CTA_TYPE_OPTIONS:[i.BOOK_NOW,i.CONTACT_US,i.OPEN_APP,i.PLAY_NOW,i.SHOP_NOW,i.SIGN_UP,i.WATCH_NOW],PLATFORM_TYPE:'CUSTOM_CTA_PLATFORM_TYPE',WEB:h.WEB,IOS:h.IOS,ANDROID:h.ANDROID,APP_ID:h.APP_ID,FALLBACK_LINK_TYPE:h.FALLBACK_LINK_TYPE,FALLBACK_LINK:h.FALLBACK_LINK,PRIMARY_LINK:h.PRIMARY_LINK,PRIMARY_LINK_TYPE:h.PRIMARY_LINK_TYPE,FALLBACK_INSTALL_APP:'fallback_install_app',FALLBACK_GO_TO_WEBSITE:'fallback_go_to_website',API_URL:'https://graph.facebook.com/',INSIGHTS_LABEL:g._("\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443"),EDIT_LABEL:g._("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u0437\u044b\u0432 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e"),DELETE_LABEL:g._("\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u0438\u0437\u044b\u0432 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e"),TEST_LABEL:g._("\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435..."),PROMOTE_LABEL:g._("\u041f\u0440\u043e\u0434\u0432\u0438\u0433\u0430\u0442\u044c"),EDIT_PROMOTION_LABEL:g._("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435"),DELETE_DIALOG_TITLE:g._("\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e"),DELETE_DIALOG_MESSAGE:g._("\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e \u0441\u043e \u0441\u0432\u043e\u0435\u0439 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u044b Facebook?"),DELETE_DURING_PROMOTION_DIALOG_TITLE:g._("\u042d\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442 \u0432\u0430\u0448\u0443 \u0440\u0435\u043a\u043b\u0430\u043c\u0443"),DELETE_DURING_PROMOTION_DIALOG_MESSAGE:g._("\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u044b \u043f\u0440\u043e\u0434\u0432\u0438\u0433\u0430\u0435\u0442\u0435 \u044d\u0442\u043e\u0442 \u043f\u0440\u0438\u0437\u044b\u0432 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e. \u041f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0432\u0430\u0448\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u0430 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430."),UPDATE_DURING_PROMOTION_DIALOG_TITLE:g._("\u042d\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0432\u0430\u0448\u0443 \u0440\u0435\u043a\u043b\u0430\u043c\u0443"),UPDATE_DURING_PROMOTION_DIALOG_MESSAGE:g._("\u0415\u0441\u043b\u0438 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u0437\u044b\u0432 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e \u0437\u0434\u0435\u0441\u044c, \u0442\u0430\u043a\u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u0440\u0435\u043a\u043b\u0430\u043c\u0430. \u0421\u043d\u043e\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u044b."),WEBSITE_LABEL:g._("\u0412\u0435\u0431-\u0441\u0430\u0439\u0442"),IPHONE_LABEL:g._("iPhone"),ANDROID_LABEL:g._("Android"),CREATE_LABEL:g._("\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u0438\u0437\u044b\u0432 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e"),CREATE_TOOLTIP:g._("\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0431\u0443\u0434\u0438\u0442\u044c \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0435\u0439 \u0441\u0432\u043e\u0435\u0439 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u0438\u043b\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),CREATE_DIALOG_TITLE:g._("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e"),CREATE_DIALOG_BODY_MESSAGE:g._("\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u0430 \u0441\u0432\u043e\u044e \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043a\u043d\u043e\u043f\u043a\u0443, \u043f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043b\u044e\u0434\u0438 \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u044c \u0441\u0440\u0430\u0437\u0443 \u0432 \u0432\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u043d\u0430 \u0432\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442."),CREATE_DIALOG_BODY_MESSAGE_IOS:g._("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435, \u043a\u0443\u0434\u0430 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043b\u044e\u0434\u0435\u0439, \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u043e\u043d\u0438 \u043a\u043e\u0441\u043d\u0443\u0442\u0441\u044f \u043a\u043d\u043e\u043f\u043a\u0438 \u043d\u0430 iPhone \u0438\u043b\u0438 \u043d\u0430 iPad."),CREATE_DIALOG_APPLINK_MESSAGE_IOS:g._("\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 URL-\u0430\u0434\u0440\u0435\u0441 \u0434\u0438\u043f\u043b\u0438\u043d\u043a\u0430 iOS \u0434\u043b\u044f \u0441\u0432\u043e\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),CREATE_DIALOG_APPLINK_MESSAGE_ANDROID:g._("\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 URL-\u0430\u0434\u0440\u0435\u0441 \u0434\u0438\u043f\u043b\u0438\u043d\u043a\u0430 Android \u0434\u043b\u044f \u0441\u0432\u043e\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),CREATE_DIALOG_BACKUP_LINK_MESSAGE:g._("\u0423\u043a\u0430\u0436\u0438\u0442\u0435, \u043a\u0443\u0434\u0430 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043b\u044e\u0434\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0435\u0449\u0435 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435. \u0415\u0441\u043b\u0438 \u043f\u043e\u043b\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0443\u0441\u0442\u044b\u043c, \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0432\u0435\u0431-\u0441\u0430\u0439\u0442, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u043c \u044d\u043a\u0440\u0430\u043d\u0435."),CREATE_DIALOG_BODY_MESSAGE_ANDROID:g._("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435, \u043a\u0443\u0434\u0430 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043b\u044e\u0434\u0435\u0439 \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043e\u043d\u0438 \u043a\u043e\u0441\u043d\u0443\u0442\u0441\u044f \u043a\u043d\u043e\u043f\u043a\u0438 \u043d\u0430 Android."),EDIT_SECTION_MESSAGE:g._("\u042d\u0442\u043e \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u044c \u043b\u044e\u0434\u0438, \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u043d\u0430\u0436\u043c\u0443\u0442 \u0438\u043b\u0438 \u043a\u043e\u0441\u043d\u0443\u0442\u0441\u044f \u0432\u0430\u0448\u0435\u0439 \u043a\u043d\u043e\u043f\u043a\u0438 \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e:"),EDIT_SECTION_EXAMPLE:g._("\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0435\u0433\u043e \u0432 \u0432\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0430 \u0435\u0441\u043b\u0438 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043d\u0430\u0436\u0430\u043b \u043a\u043d\u043e\u043f\u043a\u0443 \u0441 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430, \u2014  \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0435\u0433\u043e \u043d\u0430 \u0432\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442."),CREATE_DIALOG_PACKAGE_NAME_MESSAGE_ANDROID:g._("\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u0430 \u0441\u0432\u043e\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),EDIT_SECTION_APP_LINK_HELP_MESSAGE:g._("\u0415\u0441\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0434\u043b\u044f \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u0431\u044b\u043b\u0438 \u043d\u0430\u0439\u0434\u0435\u043d\u044b?"),CREATE_LOADING_MESSAGE:g._("\u041f\u043e\u0438\u0441\u043a \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043e\u0432 \u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0441 \u0432\u0430\u0448\u0435\u0439 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0435\u0439..."),CREATE_SELECT_CTA_LABEL:g._("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u043e\u043f\u043a\u0438"),CREATE_INVALID_WEB_LINK:g._("\u041d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430 \u0438\u043b\u0438 URL-\u0430\u0434\u0440\u0435\u0441"),CREATE_INVALID_PACKAGE_NAME:g._("\u041d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u0430"),CREATE_INVALID_APP_LINK:g._("\u041d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),CREATE_IPHONE_DEEP_LINK_TEXT:g._("\u041c\u044b \u043e\u0442\u043a\u0440\u043e\u0435\u043c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0435 \u0432\u044b\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0435\u0441\u043b\u0438 \u043e\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e"),CREATE_ANDROID_DEEP_LINK_TEXT:g._("\u041c\u044b \u043e\u0442\u043a\u0440\u043e\u0435\u043c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0435 \u0432\u044b\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0435\u0441\u043b\u0438 \u043e\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e"),CREATE_INVALID_URL_LINK:g._("\u041d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f URL-\u0441\u0441\u044b\u043b\u043a\u0430"),EDIT_CARD_WEB_TITLE:g._("\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440"),EDIT_CARD_IOS_TITLE:g._("iPhone \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043d\u0430 iOS"),EDIT_CARD_ANDROID_TITLE:g._("\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u0438\u043b\u0438 \u043f\u043b\u0430\u043d\u0448\u0435\u0442 Android"),EDIT_CARD_OTHER_M_TITLE:g._("\u0414\u0440\u0443\u0433\u043e\u0439 \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d"),EDIT_LINK_TOOLTIP:g._("\u0412\u043d\u0435\u0441\u0438\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u0430\u0434\u0440\u0435\u0441 \u044d\u0442\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0438"),WEB_LINK_INPUT_LABEL:g._("\u0412\u0435\u0431-\u0441\u0430\u0439\u0442"),WEB_LINK_INPUT_PLACEHOLDER:g._("\u041f\u0440\u0438\u043c\u0435\u0440: {url}",[g.param("url",'www.mywebsite.com')]),MOBILE_LINK_INPUT_LABEL:g._("\u0412\u0435\u0431-\u0441\u0430\u0439\u0442 \u0434\u043b\u044f \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432"),APP_LINK_INPUT_LABEL:g._("\u0421\u0441\u044b\u043b\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),APP_LINK_INPUT_LABEL_TOOLTIP:g._("\u042d\u0442\u043e \u0430\u0434\u0440\u0435\u0441 \u0441\u0441\u044b\u043b\u043a\u0438, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u044c \u043b\u044e\u0434\u0438 \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043a\u043e\u0441\u043d\u0443\u0442\u0441\u044f \u0438\u043b\u0438 \u043d\u0430\u0436\u043c\u0443\u0442 \u0432\u0430\u0448\u0443 \u043a\u043d\u043e\u043f\u043a\u0443 \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e"),APP_LINK_INPUT_PLACEHOLDER:g._("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0441\u0432\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),APP_DESTINATION_SELECTOR_LABEL:g._("\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),APP_DESTINATION_SELECTOR_LABEL_TOOLTIP:g._("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043b\u044e\u0434\u0438 \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043e\u043d\u0438 \u043a\u043e\u0441\u043d\u0443\u0442\u0441\u044f \u0438\u043b\u0438 \u043d\u0430\u0436\u043c\u0443\u0442 \u0432\u0430\u0448\u0443 \u043a\u043d\u043e\u043f\u043a\u0443 \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e"),FALLBACK_CTA_SELECTOR_LABEL:g._("\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442"),FALLBACK_CTA_SELECTOR_LABEL_TOOLTIP:g._("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043b\u044e\u0434\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043a\u043e\u0441\u043d\u0443\u043b\u0438\u0441\u044c \u0438\u043b\u0438 \u043d\u0430\u0436\u0430\u043b\u0438 \u0432\u0430\u0448\u0443 \u043a\u043d\u043e\u043f\u043a\u0443 \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e, \u043d\u043e \u0435\u0449\u0435 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u0432 \u0432\u0430\u0448\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0438\u043b\u0438 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 \u0435\u0433\u043e"),FALLBACK_LINK_INPUT_LABEL:g._("\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u044b\u0439 URL-\u0430\u0434\u0440\u0435\u0441"),FALLBACK_LINK_INPUT_LABEL_TOOLTIP:g._("\u042d\u0442\u043e \u0430\u0434\u0440\u0435\u0441 \u0441\u0441\u044b\u043b\u043a\u0438, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u044c \u043b\u044e\u0434\u0438 \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043a\u043e\u0441\u043d\u0443\u0442\u0441\u044f \u0438\u043b\u0438 \u043d\u0430\u0436\u043c\u0443\u0442 \u0432\u0430\u0448\u0443 \u043a\u043d\u043e\u043f\u043a\u0443 \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e, \u0435\u0441\u043b\u0438 \u043e\u043d\u0438 \u0435\u0449\u0435 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u0432 \u0432\u0430\u0448\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0438\u043b\u0438 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 \u0435\u0433\u043e"),STORE_ID_LABEL:g._("\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430"),STORE_ID_TOOLTIP:g._("\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435 Apple \u0438\u043b\u0438 Google Play"),GO_TO_WEBSITE_LABEL:g._("\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442"),PACKAGE_NAME_LABEL:g._("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u0430"),REVIEW_DESTINATION_LINKS_TITLE:g._("\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u0441\u044b\u043b\u043e\u043a \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u043d\u043e\u043f\u043a\u0438"),CREATE_CALL_TO_ACTION_WEBSITE:g._("\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e"),EDIT_CALL_TO_ACTION_WEBSITE:g._("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e"),CREATE_CALL_TO_ACTION_IPHONE:g._("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043b\u044e\u0434\u0435\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 iOS"),CREATE_CALL_TO_ACTION_ANDROID:g._("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 Android"),CREATE_CALL_TO_ACTION_IPAD:g._("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043b\u044e\u0434\u0435\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 iPad"),ACTION_SELECTOR_LABEL:g._("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443"),OPTIONAL_LABEL:g._("\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),IOS_SECTION_TITLE:g._("\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f iOS"),ANDROID_SECTION_TITLE:g._("\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f Android"),BACKUP_LINK_LABEL:g._("\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),DEEPLINK_LEARN_MORE_LABEL:g._("\u0423\u0437\u043d\u0430\u0439\u0442\u0435, \u043a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0438\u043f\u043b\u0438\u043d\u043a"),SELECTOR_OPTION_WEBSITE:g._("\u0412\u0435\u0431-\u0441\u0430\u0439\u0442"),SELECTOR_OPTION_APP:g._("\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),LEGEND_KEY_ORGANIC:g._("\u041e\u0440\u0433\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439"),LEGEND_KEY_PAID:g._("\u041f\u043b\u0430\u0442\u043d\u044b\u0439"),THIS_WEEK_CLICK_LABEL:g._("\u041a\u043b\u0438\u043a\u0438 \u043d\u0430 \u044d\u0442\u043e\u0439 \u043d\u0435\u0434\u0435\u043b\u0435")};e.exports=j;},null);
__d("CustomCTALogger",["Banzai"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={logVital:function(i){g.post('page_custom_cta_logger',i,g.VITAL);},log:function(i){g.post('page_custom_cta_logger',i);}};e.exports=h;},null);
__d("PageContentTabLoadingDialog",["React","DOM","XUIDialog.react","XUIDialogBody.react","XUISpinner.react","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=g.createClass({displayName:"PageContentTabLoadingDialogComponent",getInitialState:function(){return {shown:false};},render:function(){return (g.createElement(i,{width:300,shown:this.state.shown,layerHideOnBlur:false},g.createElement(j,{className:"_5xp9"},g.createElement(k,{background:"light",className:"_5xpe",size:"large"}))));},show:function(){this.setState({shown:true});},hide:function(){this.setState({shown:false});}}),n={show:function(){if(!this._dialog)this._dialog=g.render(g.createElement(m,null),h.create('div'));this._dialog.show();},hide:function(){this._dialog&&this._dialog.hide();}};e.exports=n;},null);
__d("CustomCTAUtils",["fbt","AdsCallToActionTypes","AsyncRequest","CctaTestIDs","CustomCTAConstants","Image.react","PageContentTabLoadingDialog","React","XUISelector.react","CustomCallToActionTypes"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=b('CustomCallToActionTypes').ICONS,q=b('CustomCallToActionTypes').LABELS,r=b('CustomCallToActionTypes').MOBILE_ICONS,s=b('CustomCallToActionTypes').TYPES,t=b('CustomCallToActionTypes').TYPES,u=o.Option,v={executeCallToAction:function(w,x){if(w===t.CHARITY_DONATE){m.show();new i(x).setFinallyHandler(function(y){m.hide();}).send();}else window.open(x);},getFallbackSelectorOptions:function(){var w=[];w.push(n.createElement(u,{value:k.FALLBACK_GO_TO_WEBSITE},v.getFallbackLabel(k.FALLBACK_GO_TO_WEBSITE)));w.push(n.createElement(u,{value:k.FALLBACK_INSTALL_APP},v.getFallbackLabel(k.FALLBACK_INSTALL_APP)));return w;},getCallToActionSelectorOptions:function(w){var x=[];w.forEach(function(y){x.push(n.createElement(u,{"data-testid":j.CCTA_TYPE_SELECTOR_OPTION_TESTID_PREFIX+y,key:y,value:y,icon:n.createElement(l,{src:v.getCallToActionIcon(y)})},v.getCallToActionLabel(y)));});return x;},getFallbackLabel:function(w){switch(w){case k.FALLBACK_INSTALL_APP:return (g._("\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"));case k.FALLBACK_GO_TO_WEBSITE:return (g._("\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442"));}return null;},getCallToActionLabel:function(w){return q[w];},getCallToActionMobileIcon:function(w){return r[w];},getCallToActionIcon:function(w){return p[w];},getTruncatedURI:function(w){if(!w||w.length<k.URI_TRUNCATE_LENGTH)return w;return w.substr(0,k.URI_TRUNCATE_LENGTH)+'...';},getAdsCallToActionType:function(w){switch(w){case s.BOOK_NOW:return h.TYPES.BOOK_TRAVEL.name;case s.OPEN_APP:return h.TYPES.USE_APP.name;case s.PLAY_NOW:return h.TYPES.PLAY_GAME.name;case s.SHOP_NOW:return h.TYPES.SHOP_NOW.name;case s.SIGN_UP:return h.TYPES.SIGN_UP.name;case s.WATCH_NOW:return h.TYPES.WATCH_VIDEO.name;default:return '';}}};e.exports=v;},null);
__d("PageCallToActionOpenTableDialog.react",["LayerHideOnBlur","React","XUIDialog.react","XUIDialogBody.react","XUIDialogCancelButton.react","XUIDialogConfirmButton.react","XUIDialogFooter.react"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();'use strict';var n=h.createClass({displayName:"PageCallToActionOpenTableDialog",render:function(){return (h.createElement(i,{behaviors:{LayerHideOnBlur:g},shown:true,width:400},h.createElement(j,null),h.createElement(m,null,h.createElement(k,null),h.createElement(l,null))));}});e.exports=n;},null);
__d("PageCallToActionViewerUnitMixin",["AsyncRequest","DOM","PageCallToActionDestinationTypes","PageCallToActionOpenTableDialog.react","PageContentTabLoadingDialog","React","ReactLayeredComponentMixin","XUIDialog.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogCancelButton.react","XUIDialogFooter.react","XUIDialogTitle.react","XUIText.react","fbt","CustomCallToActionTypes"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){b.__markCompiled&&b.__markCompiled();'use strict';var v=b('CustomCallToActionTypes').CONFIGS,w=l,x=w.PropTypes,y={mixins:[m],propTypes:{callToActionType:x.string.isRequired,url:x.string.isRequired},getInitialState:function(){var z=v[this.props.callToActionType];return {confirmDialog:z.confirm_dialog,showConfirmDialog:false,destinationTypes:z.destination_types};},renderLayers:function(){if(!this.state.confirmDialog)return {};return {confirmDialog:l.createElement(n,{onToggle:this._onConfirmDialogToggle,shown:this.state.showConfirmDialog,width:400},l.createElement(s,null,this.state.confirmDialog.title),l.createElement(o,null,l.createElement("div",null,l.createElement(t,{size:"xlarge"},this.state.confirmDialog.message)),l.createElement("p",null),l.createElement("div",null,l.createElement(t,{size:"small"},this.state.confirmDialog.subMessage))),l.createElement(r,null,l.createElement(q,null),l.createElement(p,{action:"button",label:this.state.confirmDialog.confirmButtonLabel?this.state.confirmDialog.confirmButtonLabel:u._("\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"),onClick:this._executeCallToAction,use:"confirm"})))};},_onClick:function(){if(this.state.confirmDialog){this.setState({showConfirmDialog:true});}else this._executeCallToAction();},_onConfirmDialogToggle:function(z){this.setState({showConfirmDialog:z});},_executeCallToAction:function(){this.setState({showConfirmDialog:false});if(this.state.destinationTypes.indexOf(i.DONATE)>=0){k.show();new g(this.props.url).setFinallyHandler(function(z){k.hide();}).send();return;}if(this.state.destinationTypes.indexOf(i.WEBSITE)>=0){window.open(this.props.url);return;}if(!this._dialogAnchor)this._dialogAnchor=h.create('div');l.render(l.createElement(j,null),this._dialogAnchor);}};e.exports=y;},null);
__d("CustomCTAViewerUnit.react",["CctaTestIDs","CustomCTALogger","CustomCTAUtils","PageCallToActionViewerUnitMixin","PagesEventType","React","Image.react","XUIButton.react"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();'use strict';var o=l,p=o.PropTypes,q=l.createClass({displayName:"CustomCTAViewerUnit",mixins:[j],propTypes:{borderShade:p.string,cctaID:p.string.isRequired,depressed:p.bool,pageID:p.string.isRequired,size:p.string,surface:p.string.isRequired,userID:p.string.isRequired},onButtonClick:function(){this._onClick();h.log({ccta_id:this.props.cctaID,ccta_type:this.props.callToActionType,event_type:k.CUSTOM_CTA_CLICK_VIEWER_UNIT,page_id:this.props.pageID,surface:this.props.surface,target_url:this.props.url,user_id:this.props.userID});},getDefaultProps:function(){return {size:"large",borderShade:"dark"};},render:function(){var r=this.props.callToActionType;return (l.createElement(n,{"data-testid":g.CCTA_VIEWER_UNIT_TESTID,borderShade:this.props.borderShade,depressed:this.props.depressed,image:l.createElement(m,{src:i.getCallToActionIcon(r)}),label:i.getCallToActionLabel(r),onClick:this.onButtonClick,size:this.props.size}));}});e.exports=q;},null);