//PLAIN JS SCSS Datei umändern
const namespace = {

  slide(elementToSlideOpen) {

    if (elementToSlideOpen.classList.contains("contactUs--origin", "contactUs--hidden")) {

      elementToSlideOpen.classList.remove("contactUs--origin", "contactUs--hidden");
      elementToSlideOpen.classList.add("contactUs--visible");

    } else if (elementToSlideOpen.classList.contains("contactUs--visible")) {

      elementToSlideOpen.classList.remove("contactUs--visible");
      elementToSlideOpen.classList.add("contactUs--hidden", "contactUs--origin");

    }
  }
}

let button = document.getElementsByClassName("imageText__button");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (event) => {
    console.log(event.target);

    namespace.slide(event.target.closest('section').querySelector('.contactUs'))
  })
}






/*
//jQuery SCSS Datei umändern

$(".imageText__button").click(function () {
  if ($(".contactUs").is(":hidden")) {
    $(".contactUs").slideDown(400);
  } else {
    $(".contactUs").slideUp(400);
  }
})
*/