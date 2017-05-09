

// Get all elements with specified clasname
var buttons = document.getElementsByClassName('themeButton');

// Add to every button a click event listener
for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var changeThemeTo = -1;

    // figure out wich button was pressed
    switch (this.id) {
      case "None": changeThemeTo = -1; break;
      case "Dark": changeThemeTo = 0; break;
      case "Costum1": changeThemeTo = 1; break;
      case "Costum2": changeThemeTo = 2; break;
      case "Costum3": changeThemeTo = 3; break;
    }
    // Save selected theme in chrome storage
    chrome.storage.sync.set({"theme" : changeThemeTo}, function() {});

    displaySelectedTheme(changeThemeTo);

    console.log("changing theme to: " + changeThemeTo);
  });
}

// On startup correct color for theme wich is selected
chrome.storage.sync.get(["theme"], function(selectedThemeObj) {
  displaySelectedTheme(selectedThemeObj.theme);
});

// display the right selected theme
function displaySelectedTheme(selectedTheme) {
  var buttons = document.getElementsByClassName('themeButton');
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = (i == selectedTheme + 1) ? "#FF0000" : "#FFF";
  }
}
