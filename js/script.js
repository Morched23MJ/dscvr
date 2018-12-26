function menuToggle() {
  document.getElementById("menu-toggle").classList.toggle("change");
  document.getElementById("nav-links").classList.toggle("hide");
  document.getElementById("navbar").classList.toggle("theme");
}

function changeColors(color) {
  document.getElementById("logo-a").style.color = color;
  document.getElementById("bar1").style.background = color;
  document.getElementById("bar2").style.background = color;
}

function isVisible(element) {
  return element.getBoundingClientRect().bottom >= 50 &&
    element.getBoundingClientRect().right <= window.innerWidth;
}

function makeMenu() {}

function showMenu() {}

function hideMenu() {
  let menu = document.getElementById("nav-links");
  if (isVisible(menu) && getComputedStyle(menu).getPropertyValue("position") == "absolute") {
    document.getElementById("menu-toggle").classList.toggle("change");
    document.getElementById("nav-links").classList.toggle("hide");
    document.getElementById("navbar").classList.toggle("theme");
  }
}
var carousel = document.querySelector(".carousel");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var items = document.querySelectorAll(".carousel li");
var pointer = 0;
var amount = items.length;
var current = items[0];
var wait = false;


function swipe(direction) {
  current.classList.remove("current");
  pointer += direction;
  if (direction == -1 && pointer < 0) pointer = amount - 1;
  else if (direction == 1 && pointer >= items.length) pointer = 0;
  current = items[pointer];
  current.classList.add("current");
  wait = true;
}

next.addEventListener("click", () => {swipe(1)});
prev.addEventListener("click", () => {swipe(-1)});

setInterval(() => {
  if (wait) wait = false;
  else next.click();
}, 5000);

/**
document.getElementById("logo-a").addEventListener("click", () => {
  if (isVisible(document.getElementById("nav-links"))) {
    document.getElementById("nav-links").classList.toggle("hide");
    document.getElementById("menu-toggle").classList.toggle("change");
  }
  if (!isVisible(document.getElementById("nav-links"))) changeColors("white");
  else if (!isVisible(document.getElementById("home"))) changeColors("black");
});
**/
/**
function darkOrLight(red, green, blue) {
  var brightness;
  brightness = (red * 299) + (green * 587) + (blue * 114);
  brightness = brightness / 255000;

  // values range from 0 to 1
  // anything greater than 0.5 should be bright enough for dark text
  if (brightness >= 0.5) {
    return "black";
  } else {
    return "white";
  }
}**/
