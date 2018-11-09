/*let button = document.getElementsByClassName("imageText__button");

console.log(button)

var namespace = {

  slide() {

    console.log("slide()");
    console.log(this);

    let contactUsClasses = document.getElementsByClassName("contactUs");
    console.log(contactUsClasses[0].classList);

    if (contactUsClasses[0].classList.contains("contactUs--origin", "contactUs--hidden")) {

      contactUsClasses[0].classList.remove("contactUs--origin", "contactUs--hidden");
      contactUsClasses[0].classList.add("contactUs--visible");

    } else if (contactUsClasses[0].classList.contains("contactUs--visible")) {

      contactUsClasses[0].classList.remove("contactUs--visible");
      contactUsClasses[0].classList.add("contactUs--hidden", "contactUs--origin");

    }
  }
};
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", namespace.slide)
}
*/

$(".imageText__button").click(function () {
  if ($(".contactUs").is(":hidden")) {
    $(".contactUs").slideDown(400);
  } else {
    $(".contactUs").slideUp(400);
  }
})