//ES5
//PLAIN JS change SCSS file first

// function slideDown(elementToSlideOpen) {
//   console.log(elementToSlideOpen[0])
//   var element = elementToSlideOpen[0].classList;
//   console.log(element)

//   if (element.length == 3) {

//     element.remove("contactUs--origin", "contactUs--hidden");
//     element.add("contactUs--visible");
//     console.log(element)

//   } else if (element.length == 2) {

//     element.remove("contactUs--visible");
//     element.add("contactUs--hidden", "contactUs--origin");

//   }
// }

function slideDown(elementToSlideOpen) {
  elementToSlideOpen[0].classList.remove("contactUs--origin", "contactUs--hidden");
  elementToSlideOpen[0].classList.add("contactUs--visible");
}

function slideUp(element) {
  console.log(element.classList)
  element.classList.remove("contactUs--visible");
  element.classList.add("contactUs--hidden", "contactUs--origin");
}

var button = document.getElementsByClassName("imageText__button");
var ctaSection = document.querySelectorAll('.contactUs');
console.log(ctaSection[0])

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function e(event) {

    ctaSection.forEach(function (element) {

      if (event.target.closest('section').getElementsByClassName('.contactUs') !== element) {

        slideUp(element)
      }
    });
    slideDown(event.target.closest("section").getElementsByClassName("contactUs"))
  })

}