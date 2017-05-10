// This code only activates when lands on web.whatsapp.com

// Get selected theme from chrome storage
chrome.storage.sync.get(["theme"], function(selectedThemeObj) {
  var selectedTheme = selectedThemeObj.theme;

  // Check if selectedTheme is None
  if(selectedTheme == -1)
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

function getCostumCSS(theme) {
  console.log(getCSSElement(theme, "mainColor"));
  var costumCSS = [

    // other
    "body " + getCSSElement(theme, "backgroundBottom"),
    ".app-wrapper.app-wrapper-web.app-wrapper-main " + getCSSElement(theme, "backgroundTop"),
    ".pane-header " + getCSSElement(theme, "topBar"), //if two separate values for top bar then: .pane-list-header
    ".chat-title" + getCSSElement(theme, "chatTitle"),
    ".chat-status" + getCSSElement(theme, "chatText"),
    ".intro-image {border-radius : 50%}",
    ".intro-secondary-text a {color : " + getCSSElement(theme, "mainColor") +  " !important;}",
    ".menu-item:not(.menu-shortcut) " + getCSSElement(theme, "menuImgItemsBg"),

    // left chat collum
    ".butterbar.butterbar-notification " + getCSSElement(theme, "desktopNotificationBg"),
    ".butterbar-title " + getCSSElement(theme, "desktopNotificationTitle"),
    ".butterbar-text" + getCSSElement(theme, "desktopNotificationText"),
    ".chatlist-panel-search " + getCSSElement(theme, "chatListPanelSearchBg1"),
    ".cont-input-search " + getCSSElement(theme, "chatListPanelSearchBg2Border"),
    ".cont-input-search " + getCSSElement(theme, "chatListPanelSearchTextBg"),
    ".cont-input-search > .input.input.input-search " + getCSSElement(theme, "chatListPanelSearchTextBg"),
    ".input-placeholder " + getCSSElement(theme, "chatListPanelSearchText"),
    ".input.input-search "+ getCSSElement(theme, "chatListPanelSearchText"),
    "#pane-side " + getCSSElement(theme, "chatListScrollBardBg"),
    ".chat " + getCSSElement(theme, "chatListChatBg"),
    ".chat-time" + getCSSElement(theme, "chatListChatTime"),
    ".chat-body" + getCSSElement(theme, "chatListChatBorderTop"),
    ".chat.active " + getCSSElement(theme, "chatListChatActiveBg"),
    ".chat.hover" + getCSSElement(theme, "chatListChatHoverBg"),
    ".chatlist .chat:after, .chatlist .location:after " + getCSSElement(theme, "chatListChatActiveAndHoverBorder"),

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
    ".empty-icon-container " + getCSSElement(theme, "archivedChatsIconBackground"),
    ".empty-title " + getCSSElement(theme, "chatText"),
    //TODO white borders
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
    ".starred-msg-author.ellipsify " + getCSSElement(theme, "chatText"),
    ".starred-msg-chat.ellipsify " + getCSSElement(theme, "chatText"),
    ".starred-title-meta " + getCSSElement(theme, "chatListChatTime"),
    //TODO white borders

    // center collum
    ".intro.pane-body " + getCSSElement(theme, "startUpBg"),
    ".pane-chat-msgs.pane-chat-body.lastTabIndex " + getCSSElement(theme, "conversationBg"),
    "[class^='bubble'] " + getCSSElement(theme, "messageBg"),
    ".document-body " + getCSSElement(theme, "messageDocumentBg"),
    ".emojitext.selectable-text " + getCSSElement(theme, "messageC"),

    // right menu colum
    ".chat-time-title " + getCSSElement(theme, "chatSearchTimeColor"),

    ".icon, .icon-s, .icon-l, .context-icon, .icon-status-check, .icon-msg-check,.menu-tabs > .menu-item{",
	// "    -webkit-filter: invert(1) !important;",
	// "    filter: invert(1) !important;",
    "    -webkit-filter: hue-rotate(-198deg) !important;", "    filter: hue-rotate(-198deg) !important;",
    "    -webkit-filter: brightness(100%) !important;", "    filter: brightness(100%) !important;",
    "    -webkit-filter: contrast(100%) !important;", "    filter: contrast(100%) !important;",
  	"}",

  ].join("\n");
  return costumCSS;
}

// get correct code from themsData with different input possibilitys
// return string with css code
function getCSSElement(theme, elementName) {
  var inputRaw = theme[elementName];
  var input = inputRaw.split(">");

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
}
