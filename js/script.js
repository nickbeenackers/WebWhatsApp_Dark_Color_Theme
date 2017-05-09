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
  console.log(getCSSElement(theme, "topBar"));
  var costumCSS = [

    //other
    "body " + getCSSElement(theme, "backgroundBottom"),
    ".app-wrapper.app-wrapper-web.app-wrapper-main " + getCSSElement(theme, "backgroundTop"),
    ".pane-header " + getCSSElement(theme, "topBar"), //if two separate values for top bar then: .pane-list-header
    ".chat-title" + getCSSElement(theme, "chatTitle"),
    ".chat-status" + getCSSElement(theme, "chatText"),
    ".intro.pane-body " + getCSSElement(theme, "startUpBg"),
    ".intro-image {border-radius : 50%}",

    // left collum
    ".butterbar.butterbar-notification " + getCSSElement(theme, "desktopNotificationBg"),
    ".butterbar-title " + getCSSElement(theme, "desktopNotificationTitle"),
    ".butterbar-text" + getCSSElement(theme, "desktopNotificationText"),
    ".chatlist-panel-search " + getCSSElement(theme, "chatListPanelSearchBg1"),
    ".cont-input-search " + getCSSElement(theme, "chatListPanelSearchBg2"),
    ".cont-input-search " + getCSSElement(theme, "chatListPanelSearchBg2Border"),
    ".input-placeholder " + getCSSElement(theme, "chatListPanelSearchTextBg"),
    ".input-placeholder " + getCSSElement(theme, "chatListPanelSearchText"),
    "#pane-side " + getCSSElement(theme, "chatListScrollBardBg"),
    ".chat " + getCSSElement(theme, "chatListChatBg"),
    ".chat-time" + getCSSElement(theme, "chatListChatTime"),
    ".chat-body" + getCSSElement(theme, "chatListChatBorderTop"),
    ".chat.active " + getCSSElement(theme, "chatListChatActiveBg"),
    ".chat.active " + getCSSElement(theme, "chatListChatActiveBorder"),
    ".chat.active:hover " + getCSSElement(theme, "chatListChatActiveHover"),
//    ". " + getCSSElement(theme, ""),

    // center collum
    ".pane-chat-msgs.pane-chat-body.lastTabIndex " + getCSSElement(theme, "msgListbg"),

  ].join("\n");
  return costumCSS;
}

// get correct code from themsData with different input possibilitys
// return string with css code
function getCSSElement(theme, elementName) {
  var inputRaw = theme[elementName];
  var input = inputRaw.split(">");

  switch (input[0]) {
    default:
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
  }
}
