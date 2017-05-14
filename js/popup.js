var bodyWidth = 160;

document.body.style.width = bodyWidth + "px";
document.body.style.height = "150px";
document.body.style.backgroundColor = "#1E2124";

// var button = document.createElement("BUTTON");
// button.className = "theme button";
// button.innerHTML = "None";
// button.style.width = "100%";
// document.body.appendChild(button);

for(var i = 0; i < dataThemes.length ; i++) {
  var theme  = dataThemes[i];

  var div = document.createElement("DIV");
  div.className = "theme container";
  div.style.paddingBottom = "5px";

  var button = document.createElement("BUTTON");
  button.innerHTML = theme.name;
  button.className = "theme button";
  button.style.width = "100%";
  div.appendChild(button);

  if(theme.options.length != 0){
    var divOptions = document.createElement("DIV");
    divOptions.style.height = "20px";

    for(var i = 0; i < theme.options.length; i++) {
      var buttonOption = document.createElement("BUTTON");
      buttonOption.style.width = "20px";
      buttonOption.style.height = "20px";
      buttonOption.className = "theme option";
      buttonOption.innerHTML = "d";
      buttonOption.backgroundColor = theme.options[i].name;
      console.log(buttonOption);
      divOptions.appendChild(buttonOption);
    }
    div.appendChild(divOptions);
  }

  document.body.appendChild(div);

}

  //   chrome.storage.sync.set({"theme" : 1}, function() {});

// Get all elements with specified clasname
// var buttons = document.getElementsByClassName('themeButton');
//
// // Add to every button a click event listener
// for(var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     var changeThemeTo = -1;
//
//     // figure out wich button was pressed
//     switch (this.id) {
//       case "None": changeThemeTo = -1; break;
//       case "Dark": changeThemeTo = 0; break;
//       case "Costum1": changeThemeTo = 1; break;
//       case "Costum2": changeThemeTo = 2; break;
//       case "Costum3": changeThemeTo = 3; break;
//     }
//     // Save selected theme in chrome storage
//     chrome.storage.sync.set({"theme" : changeThemeTo}, function() {});
//
//     displaySelectedTheme(changeThemeTo);
//
//     console.log("changing theme to: " + changeThemeTo);
//   });
// }

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
