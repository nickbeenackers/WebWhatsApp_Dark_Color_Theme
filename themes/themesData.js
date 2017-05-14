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
function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}


//Darktheme colors are based off Discord dark mode
var darkBg = Array("#36393E", "#2E3136", "#282B30", "#1E2124", "#111",  //sorted light to dark
                    "rgba(40,43,48, 0.6)");
var darkFontC =  Array("#FFF", "rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.4)");
var mainColorSplit = {
  "r" : "255",
  "g" : "0",
  "b" : "0",
};
var mainColorSelect = 1;
var mainColor = "#" + decimalToHex(mainColorSplit["r"]) + decimalToHex(mainColorSplit["g"]) + decimalToHex(mainColorSplit["b"]);
var mainColorCSS = "" +  mainColorSplit["r"] + "," + mainColorSplit["g"] + "," + mainColorSplit["b"];


var dataThemes = [
{
  "name" : "None",
  "options" : [],
},
{
    "name" : "Dark",
    "change" : "mainColor",
    "options" : [
      {"name" : "none",   "data" :  ["",    "",     ""]},
      {"name" : "red",    "data" :  ["255", "0",    "0"]},
      {"name" : "yellow", "data" :  ["255", "255",  "0"]},
      {"name" : "green",  "data" :  ["0",   "255",  "0"]},
      {"name" : "cyan",   "data" :  ["0",   "255",  "255"]},
      {"name" : "blue",   "data" :  ["0",   "0",    "255"]},
      {"name" : "purple", "data" :  ["255", "0",    "255"]},
      {"name" : "rainbow","data" :  ["",    "",     ""]}
    ],

    //other
    "backgroundTop" : "bg>" + darkBg[4],
    "backgroundBottom" : "bg>" + darkBg[4],

    "chatTitle" : "c>" + darkFontC[0],
    "chatText" : "c>" + darkFontC[1],
    "mainColor" : "" + mainColor,

    "topBar" : "bg>" + darkBg[3],
    "menuItemBg" : "css>border-radius : 30% !important;  \n background-color : rgba(" + mainColorCSS + ", 0.6) !important;",
    "menuItemClickedBg" : "css>border-radius : 30% !important;  \n background-color : rgba(" + mainColorCSS + ", 0.8) !important;",
    "subMenuItemBg" : "bg>" + darkBg[3],
    "subMenuItemC" : "c>" + darkFontC[1],


    "chatListScrollBarBg" : "bg>" + darkBg[1],
    "chatListScrollBarMover" : "bg>rgba(" + mainColorCSS + ", 0.5)", //By default the mover will be a bit darker color then the background color


    //Left chat colum
    "notificationTitle" : "c>" + darkFontC[0],
    "notificationText" : "c>" + darkFontC[0],
    "desktopNotificationBg" : "bg>" + darkBg[2],
    "notConnectedNotificationBg" : "bg>" + mainColor,

    "chatListPanelSearchBg1" :  "bg>" + darkBg[2],
    "chatListPanelSearchBg2Border" : "css>border-width : 0px;",
    "chatListPanelSearchTextBg" : "bg>" + darkBg[0],
    "chatListPanelSearchText" : "c>" + darkFontC[1],


    "chatListChatBg" : "bg>" + darkBg[1],
    "chatListChatTime" : "c>" + darkFontC[2],
    "chatListChatBorderTop" : "css>border-top-color : " + darkBg[2] + " !important;",
    "chatListChatActiveBg" : "bg>" + darkBg[2],
    "chatListChatActiveAndHoverBorder" : "css>border-bottom-color : " + darkBg[2] + " !important;",
    "chatListChatHoverBg" : "bg>" + darkBg[2],

    //left menu items
    "menuItemHeaderBg" : "bg>" + darkBg[3],
    "menuItemBodyBg" : "bg>" + darkBg[1],
    "inputBg1" : "bg>" + darkBg[4],
    "inputBg2" : "bg>" + darkBg[0],
      //settings
    "TurnOffAlertsAndSoundColor" : "c>" + darkFontC[0], // !NOT WORIKING!
      //archived chats
    "archivedChatsIconBackground" : "bg>" + darkBg[1],
      //new group
      //starred messages
    "starredMsgHover" : "bg>" + darkBg[2],
    "starredMsgActive" : "bg>" + darkBg[2],

    //center collum
    "startUpBg" : "bg>" + darkBg[0],
    "conversationBg" : "bg>" + darkBg[0],
    "messageBg" : "bg>" + darkBg[1],
    "messageC" : "c>" + darkFontC[1],
    "messageBigBg" : "bg>" + darkBg[0],
    "messageDiscriptionC" : "c>" + darkFontC[2],
    "messageSelectedBg" : "css>background-color : rgba(" + mainColorCSS + ", 0.1) !important;",
    "messageOutTailBg" : "css>filter: invert(1) grayscale(100%) contrast(69%);",
    "messageInTailBg" : "css>filter: invert(1) grayscale(100%) contrast(60%);",
      //footer
    "conversationSendMsgBg1" : "bg>" + darkBg[1],
    "conversationSendMsgBg2" : "bg>" + darkBg[0],
      //emoji picker


    //right menu colum
    "conversationSearchTimeColor" : "c>" + darkBg[0],


    //Use here page
    "useWhatsAppHerePopupBg" : "bg>" + darkBg[3],
    "useWhatsAppHerePopupText" : "c>" + darkFontC[1],
    "useWhatsAppHerePopupBtnText" : "c>" + darkBg[3],
  }];
// dataThemes[1] = {
//     "themeName" : "Costum 1",
//     "topBar" : "#"
//   }
