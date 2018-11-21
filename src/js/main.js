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