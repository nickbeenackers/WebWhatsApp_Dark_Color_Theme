// This code only activates when lands on web.whatsapp.com

// Get selected theme from chrome storage
chrome.storage.sync.get(["theme"], function(selectedThemeObj) {
  var selectedTheme = selectedThemeObj.theme;

  // Check if selectedTheme is None
  if(selectedTheme == 0)
    return;

  var theme = dataThemes[selectedTheme];
  console.log(theme);
  var costumCSS;

  $(function() { //Do this when page loading is finished
    // remove old css
    $(costumCSS).remove();

    // Set new CSS style
    costumCSS = $('<style type="text/css"></style>');
    costumCSS.html(getCostumCSS(theme));
    $(document.body).append(costumCSS);
  });
});

// function getCSSElementRaw2(theme, elementName) {
//   console.log("Debug 1");
//   var inputRaw = theme[elementName];
//     console.log("Debug 2");
//   var input = inputRaw.split(">");
//     console.log("Debug 3");
//     console.log(input);
//   if(input.size > 1)
//     return input[1];
//   else
//     return "";
// }

function getCostumCSS(theme) {
  //console.log(getCSSElement(theme, "mainColor"));
  console.log(mainColorCSS);
  console.log(mainColor);
  var costumCSS = [

    // other
    "body " + getCSSElement(theme, "backgroundBottom"),
    ".app-wrapper.app-wrapper-web.app-wrapper-main " + getCSSElement(theme, "backgroundTop"),
    ".pane-header " + getCSSElement(theme, "topBar"), //if two separate values for top bar then: .pane-list-header
    ".chat-title" + getCSSElement(theme, "chatTitle"),
    ".chat-status" + getCSSElement(theme, "chatText"),
    ".intro-image {border-radius : 50%}",
    ".intro-secondary-text a {color : " + getCSSElement(theme, "mainColor") +  " !important;}",

    ".menu-item:not(.menu-shortcut) " + getCSSElement(theme, "menuItemBg"),
    //".menu-item:not(.menu-shortcut) border-radius : 30% !important;",
    ".menu-item.active:not(.menu-shortcut) " + getCSSElement(theme, "menuItemClickedBg"),
    //".menu-item.active:not(.menu-shortcut) border-radius : 30% !important;",
    ".dropdown.dropdown-right, .dropdown.dropdown-compact, .dropdown {background-color : " + getCSSElement(theme, "mainColor") + "!important;}",
    ".menu-item.menu-shortcut " + getCSSElement(theme, "subMenuItemBg"),
    ".ellipsify " + getCSSElement(theme, "subMenuItemC"),

    "*::-webkit-scrollbar-track " + getCSSElement(theme, "chatListScrollBarBg"),
    "*::-webkit-scrollbar-thumb {background : " + getCSSElement(theme, "chatListScrollBarMover", "Raw") + " !important;}",

    // left chat collum
    ".butterbar-title " + getCSSElement(theme, "notificationTitle"),
    ".butterbar-text" + getCSSElement(theme, "notificationText"),
    ".butterbar.butterbar-notification " + getCSSElement(theme, "desktopNotificationBg"),
    ".butterbar.butterbar-computer " + getCSSElement(theme, "notConnectedNotificationBg"),
    ".butterbar.butterbar-phone " + getCSSElement(theme, "notConnectedNotificationBg"),

    ".chatlist-panel-search " + getCSSElement(theme, "chatListPanelSearchBg1"),
    ".cont-input-search " + getCSSElement(theme, "chatListPanelSearchBg2Border"),
    ".cont-input-search " + getCSSElement(theme, "chatListPanelSearchTextBg"),
    ".cont-input-search > .input.input.input-search " + getCSSElement(theme, "chatListPanelSearchTextBg"),
    ".input-placeholder " + getCSSElement(theme, "chatListPanelSearchText"),
    ".input.input-search "+ getCSSElement(theme, "chatListPanelSearchText"),


    ".chat " + getCSSElement(theme, "chatListChatBg"),
    ".chat-time" + getCSSElement(theme, "chatListChatTime"),
    ".chat-body" + getCSSElement(theme, "chatListChatBorderTop"),
    ".chat.active " + getCSSElement(theme, "chatListChatActiveBg"),
    ".chat.hover, .location:hover " + getCSSElement(theme, "chatListChatHoverBg"),
    ".chat:after,  .location:after " + getCSSElement(theme, "chatListChatActiveAndHoverBorder"), //.chatlist
    ".chatlist.list-icons .chat:hover .chat-body  {border-top-color : " + getCSSElement(theme, "mainColor") + " !important;}",

    // left menu colum
    ".drawer-header " + getCSSElement(theme, "menuItemHeaderBg"),
    ".drawer-body " + getCSSElement(theme, "menuItemBodyBg"),
    ".input-wrapper " + getCSSElement(theme, "inputBg1"),
    ".input-emoji " + getCSSElement(theme, "inputBg2"),
      //settings
    ".label " + getCSSElement(theme, "chatTitle"),
    ".hint " + getCSSElement(theme, "chatText"),
    ".checkbox.checked {background-color : " + getCSSElement(theme, "mainColor") + " !important; \n border-color : " + getCSSElement(theme, "mainColor") + " !important;}", //+ getCSSElement(theme, "checkBoxChecked"),
    "select  " + getCSSElement(theme, "TurnOffAlertsAndSoundColor"),
    "select  " + getCSSElement(theme, "menuItemBodyBg"),
    ".empty-icon-container " + getCSSElement(theme, "archivedChatsIconBackground"),
    ".empty-title " + getCSSElement(theme, "chatText"),
      //new group
    ".input-wrapper {border-bottom-color : " + getCSSElement(theme, "mainColor") + " !important; border-radius : 5px !important;}",
    ".input-emoji  {border-radius : 5px !important;}",
    ".label-text " + getCSSElement(theme, "chatTitle"),
    ".input.input-text " + getCSSElement(theme, "chatText"),
    ".char-counter {color : #697074 !important;}",
    ".btn.btn-round {background-color : " + getCSSElement(theme, "mainColor") + "!important;}",
      //profile
    ".row.drawer-section-title " + getCSSElement(theme, "chatTitle"),
    ".animate-enter1.well-input.drawer-section.well " + getCSSElement(theme, "menuItemBodyBg"),
    ".hint.animate-enter1.well-transparent " + getCSSElement(theme, "chatText"),
      //starred messages
    ".starred-msg-wrapper.hover " + getCSSElement(theme, "starredMsgHover"),
    ".starred-msg-wrapper.active " + getCSSElement(theme, "starredMsgActive"),
    ".starred-msg-wrapper.active:before,  .starred-msg-wrapper.current:before, .starred-msg-wrapper:before " +getCSSElement(theme, "starredMsgActive"),
    ".starred-msg-wrapper.active:after,  .starred-msg-wrapper.current:after, .starred-msg-wrapper:after " + getCSSElement(theme, "starredMsgActive"),
    ".starred-msg-wrapper:after " +getCSSElement(theme, "chatListChatActiveAndHoverBorder"),
    ".starred-msg-author.ellipsify " + getCSSElement(theme, "chatText"),
    ".starred-msg-chat.ellipsify " + getCSSElement(theme, "chatText"),
    ".starred-title-meta " + getCSSElement(theme, "chatListChatTime"),

    // center collum
    ".intro.pane-body " + getCSSElement(theme, "startUpBg"),
    ".intro:after {border-top-color : " + getCSSElement(theme, "mainColor") + " !important;}",

    ".pane-chat-msgs.pane-chat-body.lastTabIndex " + getCSSElement(theme, "conversationBg"),
    "[class^='bubble'] " + getCSSElement(theme, "messageBg"),
    ".message-system-body " + getCSSElement(theme, "messageBg"),
    ".document-body " + getCSSElement(theme, "messageBigBg"),
    ".emojitext.ellipsify " + getCSSElement(theme, "messageC"),
    ".emojitext.selectable-text " + getCSSElement(theme, "messageC"),
    ".vcard-name " + getCSSElement(theme, "messageC"),
    ".message-daytime " + getCSSElement(theme, "chatListChatTime"),

    ".context-out.context {background : linear-gradient(to right, rgba(220,248,198,0) 0%, " + getCSSElement(theme, "messageBg", "Raw") + " 50%) !important;}",
    ".context-in.context {background : linear-gradient(to right, rgba(220,248,198,0) 0%, " + getCSSElement(theme, "messageBg", "Raw") + " 50%) !important;}",
    ".context-media {background : linear-gradient(15deg, transparent 0%, transparent 45%, rgba(0,0,0,0.12) 70%, rgba(0,0,0,0.33) 100%);}",
    ".context-out.context-special {background : linear-gradient(to right, rgba(220,248,198,0) 0%, " + getCSSElement(theme, "messageBigBg", "Raw") + " 50%) !important;}",
    ".context-in.context-special {background : linear-gradient(to right, rgba(220,248,198,0) 0%, " + getCSSElement(theme, "messageBigBg", "Raw") + " 50%) !important;}",

    ".link-preview-container " + getCSSElement(theme, "messageBigBg"),
    ".link-preview-title " + getCSSElement(theme, "messageC"),
    ".link-preview-description " + getCSSElement(theme, "messageC"),
    ".selected .msg-select, .selected .msg-select:hover, .msg-select:hover " + getCSSElement(theme, "messageSelectedBg"),
    ".message-in .tail-container " + getCSSElement(theme, "messageInTailBg"),
    ".message-out .tail-container " + getCSSElement(theme, "messageOutTailBg"),

    ".media-content "  + getCSSElement(theme, "conversationBg"),
    ".media-panel-header, .media-panel-header > .chat.media-chat " + getCSSElement(theme, "topBar"),
    ".media-collection, .media-viewer " + getCSSElement(theme, "topBar"),
    ".media-viewer {padding-bottom : 0px !important;}",
    ".media-collection {border-color : " + getCSSElement(theme, "mainColor") + " !important;}",

    ".drawer-header-popup {background-color : " + getCSSElement(theme, "mainColor") + " !important;}",
    ".drawer-header-popup " + getCSSElement(theme, "chatTitle"),
    ".popup-contents > .drawer > [tabindex='-1'] " + getCSSElement(theme, "chatListPanelSearchBg1"),
    ".infinite-list-item.infinite-list-item-transition > .list-title " + getCSSElement(theme, "chatListChatActiveBg"),
    ".drawer-controls-summary " + getCSSElement(theme, "topBar"),
    ".list-comma-item " + getCSSElement(theme, "notificationTitle"),
    ".backdrop " + getCSSElement(theme, "backdrop"),
    ".compose-popup-panel, .link-preview-compose > .btn-background , .block-compose " + getCSSElement(theme, "conversationBg"),


      //footer
    ".input " + getCSSElement(theme, "messageC"),
    ".pane-footer.pane-chat-footer {background-color : " + getCSSElement(theme, "mainColor") + " !important; border-left-width : 0px; border-right-width : 0px;}",
    ".block-compose " + getCSSElement(theme, "conversationSendMsgBg1"),
    ".input-container " + getCSSElement(theme, "conversationSendMsgBg2"),
    ".input-container {border-width : 0px !important;}",

    ".multi-controls " + getCSSElement(theme, "conversationSendMsgBg1"),
    ".multi-count " + getCSSElement(theme, "messageC"),
      //emoji picker
    ".menu-tabs.menu-tabs-emoji.emoji-panel-header " + getCSSElement(theme, "conversationSendMsgBg1"),
    ".menu-tabs-marker {background-color : " + getCSSElement(theme, "mainColor") + " !important;}",
    ".emoji-panel-body-container, .emoji-search-row, .emoji-search, .dropdown-picker, .dropdown-picker .nib "  + getCSSElement(theme, "conversationSendMsgBg1"),
    ".emoji-panel-body-container, .emoji-search-row, .emoji-search, .dropdown-picker, .dropdown-picker .nib {background : 0}",
    ".emoji-panel-title " + getCSSElement(theme, "chatText"),
    ".emoji-panel-section > * > [tabindex='-1'] {background-color : #FFF !important; \nborder-radius : 20px !important;}",

    // right menu colum
    ".chat-time-title " + getCSSElement(theme, "conversationSearchTimeColor"),
    ".header-title " + getCSSElement(theme, "chatTitle"),
    ".well " + getCSSElement(theme, "chatListChatBg"),
    ".well-chat-secondary.well-chat-secondary-group " + getCSSElement(theme, "chatListChatTime"),
    ".well-chat-secondary.well-chat-secondary-group {padding-top : 10px !important;}",
    ".well-simple " + getCSSElement(theme, "chatListChatBg"),
    ".row-body " + getCSSElement(theme, "chatListChatActiveAndHoverBorder"),
    ".list-action-icon {background-color : " + getCSSElement(theme, "mainColor") + " !important;}",
    ".title " + getCSSElement(theme, "chatTitle"),
    ".drawer-section-body.chatlist {padding-top : 0px}",
    ".list-action-body.ellipsify {border-bottom-color : " + mainColor + " !important}",
    ".list-action.list-action-alt:hover "  + getCSSElement(theme, "chatListChatActiveBg"),
    ".chatlist-panel-body.pane-list-body " + getCSSElement(theme, "chatListChatBg"),
    ".empty-text " + getCSSElement(theme, "chatTitle"),
      //all media
    ".menu-tabs.menu-tabs-lists > .menu-item {border-radius : 0% !important;}",
    ".menu-tabs.menu-tabs-lists:before {background-color : " + getCSSElement(theme, "mainColor") + " !important;}",
      //invite to group via media
    ".drawer-header-small " + getCSSElement(theme, "topBar"),
    ".drawer-title-body " + getCSSElement(theme, "chatTitle"),
    ".chat-idle:hover, .chat-idle:active " + getCSSElement(theme, "chatListChatHoverBg"),
    ".list-invite a {color : " + getCSSElement(theme, "mainColor") + " !important;}",
    ".controls-section " + getCSSElement(theme, "chatText"),


    ".icon, .icon-s, .icon-l, .context-icon, .icon-status-check, .icon-msg-check,.menu-tabs > .menu-item{",
  	//"-webkit-filter: invert(1) !important; \nfilter: invert(1) !important;",
    //"background-color : #FFF; background-blend-mode : color;",
    //"    -webkit-filter: satturation(0%) !important;", "    filter: satturation(0%) !important;",
    //"    -webkit-filter: satturation(100%) !important;", "    filter: satturation(100%) !important;",
      "    -webkit-filter: hue-rotate(-90deg) !important;", "    filter: hue-rotate(-90deg) !important;",
     //"    -webkit-filter: brightness(50%) !important;", "    filter: brightness(50%) !important;",
      //"    -webkit-filter: contrast(8) !important;", "    filter: contrast(8) !important;",
      // yellow : -135deg
      // green : -90deg
      // blue :
      // red :
      // cyan : -20deg
      // purple : 110deg

    	"}",

      //user here page
      ".backdrop.backdrop-transparent " + getCSSElement(theme, "backgroundBottom"),
      ".popup " + getCSSElement(theme, "useWhatsAppHerePopupBg"),
      ".popup-contents " + getCSSElement(theme, "useWhatsAppHerePopupText"),
      ".btn-plain.popup-controls-item  {color : " + getCSSElement(theme, "mainColor") + " !important;}",
      ".btn-plain.btn-default.popup-controls-item {background-color : " + getCSSElement(theme, "mainColor") + " !important; color : " + getCSSElement(theme, "useWhatsAppHerePopupBtnText", "Raw")  + " !important;}",

  ].join("\n");
  return costumCSS;
}

// get correct code from themsData with different input possibilitys
// return string with css code
function getCSSElement(theme, elementName) {
  var inputRaw = theme[elementName];
  //console.log(elementName);
  var input = inputRaw.split(">");

  if(arguments[2] === "Raw") {
    // check if "keep>" was the opperation
    console.log(input);
    if(input.length> 1)
       return input[1];
     else
       return "";
  }

  switch (input[0]) {
    case "bg" :
    case "bgColor":
      return "{background-color : " + input[1] + " !important;}";
    case "bgg" :
      return "{background-color : #" + input[1] + input[1] + input[1] + " !important;}";

    // case "cN" :
    // case "colorN":
    //   return "{background-color : \'" + input[1] + "\' !important;}";

    case "imgR" :
      return "{background-image : url(\'" + input[1] + "\'); background-repeat : repeat;}";
    case "imgF" :
      return "{background-image : url(\'" + input[1] + "\'); background-size : 100%;}";

    case "c" :
    case "color":
      return "{color : " + input[1] + " !important;}";

    case "css" :
      return "{" + input[1] + "}";

    case "keep":
      return "";


    default:
      return input[0];
  }

  // function getCSSElementRaw(theme, elementName) {
  //   var inputRaw = theme[elementName];
  //   var input = inputRaw.split(">");
  //   if(input.size > 1)
  //     return input[1];
  //   else
  //     return "";
  // }
}
