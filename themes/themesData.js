/**
  lines with "!NOT WORKING!" are functions wich are currently not working :(

  options for variables:
  c> or color>      Sets the font color of the elementtot the given #RGB color in hex. ex: "color>#FF0000" or "c>#FF0000" gives the font a red color.
  bg> or bgColor>   Sets the background of the element to the given #RGB(a) color in hex. ex: "bgColor>#FF0000" or "bg>#FF0000" gives the background a red color. rgb(r, g, b) and rgba(r, b, g, a) can also be used. ex: "bg>rgba(255, 0, 0, 0.5)" will color it red with 50% opacity.
  bgg>              Sets the background to the given grey value. ex: "bgg>FF" will make it completly black.
  !NOT WORKING! cN or colorN>  Sets the background of the element to the given to css known color name. ex: "color>red" or "cN>red" gives the background a red color
  imgF>             Try's to set the background of the element the given image or gif url. !IMPORTANT! links need to end with img format(.jpg, .png). ex: "imgF>https://www.w3schools.com/w3images/fjords.jpg" will try to set it to the given background.
  imgR>             Does thesame as imgF except it reapeats instead of resize to fit. ex: "imgR>http://forum.partyserver.us/styles/skype/smiley/emoticon-0143-smirk.gif" will try to put the 19x19 gif repeatetly on je element.
  css>              Give css code so that you can modify it howEver you want. ex: "css>background-color : #FF0000; \n opacity : 0.5;" will set the element to the given css code.
  keep>             Doesn't change anything about it and shows the standard whatsapp colors. ex: "keep>"


*/
var dataThemes = [];

//Darktheme colors are based off Discord dark mode
var darkBg = Array("#36393E", "#2E3136", "#282B30", "#1E2124", "#111"); //sorted light to dark
var darkFontC = new Array("#FFF", "rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.4)");
dataThemes[0] = {
    "themeName" : "Dark",

    //other
    "backgroundTop" : "bg>" + darkBg[4],
    "backgroundBottom" : "bg>" + darkBg[4],

    "topBar" : "bg>" + darkBg[3],

    "startUpBg" : "bg>" + darkBg[0],

    "chatTitle" : "c>" + darkFontC[0],
    "chatText" : "c>" + darkFontC[1],

    //Left colum
    "desktopNotificationBg" : "bg>" + darkBg[2],
    "desktopNotificationTitle" : "c>" + darkFontC[0],
    "desktopNotificationText" : "c>" + darkFontC[0],

    "chatListPanelSearchBg1" :  "bg>" + darkBg[2],
    "chatListPanelSearchBg2" : "keep>",// Do not adjust this value
    "chatListPanelSearchBg2Border" : "css>border-width : 0px;",
    "chatListPanelSearchTextBg" : "keep>", // Do not adjust this value
    "chatListPanelSearchText" : "keep>",

    "chatListScrollBardBg" : "bg>" + darkBg[1],
    "chatListChatBg" : "bg>" + darkBg[1],
    "chatListChatTime" : "c>" + darkFontC[2],
    "chatListChatBorderTop" : "css>border-top-color : " + darkBg[2] + " !important;",
    "chatListChatActiveBg" : "bg>" + darkBg[2],
    "chatListChatActiveBorder" : "css>border-bottom-color : " + darkBg[2] + " !important;",
    "chatListChatActiveHover" : "css>border-bottom-color : " + darkBg[2] + " !important;",

    //center collum
    "msgListbg" : "bg>" + darkBg[0],
  };
dataThemes[1] = {
    "themeName" : "Costum 1",
    "topBar" : "#"
  }
