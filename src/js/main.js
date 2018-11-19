//ES5
//PLAIN JS change SCSS file first

function slide(elementToSlideOpen) {
  console.log(elementToSlideOpen[0])
  var element = elementToSlideOpen[0].classList;
  console.log(element)

  if (element.length == 3) {

    element.remove("contactUs--origin", "contactUs--hidden");
    element.add("contactUs--visible");
    console.log(element)

  } else if (element.length == 2) {

    element.remove("contactUs--visible");
    element.add("contactUs--hidden", "contactUs--origin");

  }
}

var button = document.getElementsByClassName("imageText__button");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function e(event) {
    slide(event.target.closest("section").getElementsByClassName("contactUs"))
  })
}