var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");
var click = document.body.querySelector(".counterButton");
var num = document.body.querySelector(".showNumber");
var start = 0;
var total = 0;

var pages = [
  { name: "Home", content: "Stuff I wanna see" },
  { name: "About", content: "About me" },
  { name: "Interact", content: "none" }
];

contentWrite(pages[0].content, "Home");

for (var i = 0; i < pages.length; i++) {
  //Prints the main buttons
  createPage(pages[i]);
}

var counterButton = document.createElement("button");
counterButton.addEventListener("click", function () {
  total = count(total);
  start = 0;
  start = start + total;
  num.innerHTML = "Counter: " + total;
});
counterButton.innerHTML = "Increase Counter:";
click.appendChild(counterButton);
num.innerHTML = "Counter: " + total;

function count(total) {
  var total2 = total + 1;
  return total2;
}

function createPage(pg) {
  //Prints the names on to the buttons
  var button = document.createElement("button");
  button.addEventListener("click", function () {
    contentWrite(pg.content, pg.name);
  });
  button.innerHTML = pg.name;
  nav.appendChild(button);
}

function contentWrite(wd, pg) {
  //Chooses the page to go to
  display.innerHTML = "";
  if (pg == "Home") {
    homePage();
  } else if (pg == "About") {
    aboutPage();
  } else {
    interactPage();
  }
}

function homePage() {
  //Stuff on the home page
  var title = document.createElement("h1");
  title.innerHTML = "Home";
  display.appendChild(title);
  click.style.visibility = "hidden";
  num.style.visibility = "hidden";
}

function aboutPage() {
  //Stuff on the about page
  var title = document.createElement("h1");
  var name = document.createElement("h3");
  title.innerHTML = "About";
  name.innerHTML = "Andrew";
  display.appendChild(title);
  display.appendChild(name);
  click.style.visibility = "hidden";
  num.style.visibility = "hidden";
}

function interactPage() {
  //stuff on the interact page
  var title = document.createElement("h1");
  title.innerHTML = "Interact";
  display.appendChild(title);
  click.style.visibility = "visible";
  num.style.visibility = "visible";
}