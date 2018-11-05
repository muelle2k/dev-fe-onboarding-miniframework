//import { animatedScrollTo } from "./es6-scroll-to.js";
//animatedScrollTo(500);

/*$(document.body).click(function() {
  if ($(".contactUs").is(":hidden")) {
    $(".contactUs").slideDown("slow");
  } else {
    $(".contactUs").slideUp("slow");
  }
});*/

let button = document.getElementById("contactUsButton");
button.addEventListener("click", function () {
  slide();
});

function slide() {
  var contactUsClasses = document.getElementsByClassName("contactUs");
  console.log(contactUsClasses[0].classList);
  if (contactUsClasses[0].classList.contains("contactUs--origin", "contactUs--hidden")) {

    contactUsClasses[0].classList.remove("contactUs--origin", "contactUs--hidden");
    contactUsClasses[0].classList.add("contactUs--visible");

  } else if (contactUsClasses[0].classList.contains("contactUs--visible")) {

    contactUsClasses[0].classList.remove("contactUs--visible");
    contactUsClasses[0].classList.add("contactUs--hidden", "contactUs--origin");

  }
}
/*the above alternative is better because of less code 
function slide() {
  var contactUsClasses = document.getElementsByClassName("contactUs");
  console.log(contactUsClasses[0].classList);

  function open() {
    console.log("open");
    contactUsClasses[0].classList.remove(
      "contactUs--origin",
      "contactUs--hidden"
    );
    contactUsClasses[0].classList.add("contactUs--visible");
  }

  function close() {
    console.log("close");
    contactUsClasses[0].classList.remove("contactUs--visible");
    contactUsClasses[0].classList.add("contactUs--hidden", "contactUs--origin");
  }

  if (
    contactUsClasses[0].classList.contains(
      "contactUs--origin",
      "contactUs--hidden"
    )
  ) {
    open();
  } else if (contactUsClasses[0].classList.contains("contactUs--visible")) {
    close();
  }
  */