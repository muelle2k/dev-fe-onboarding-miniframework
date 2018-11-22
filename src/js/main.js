console.log("ES5")
var contactUs = {
  button: document.getElementsByClassName("imageText__button"),
  ctaSection: document.querySelectorAll('.contactUs'),
  opened: "contactUs--visible",
  closed: "contactUs--hidden",
  orgin: "contactUs--origin",

  slideDown: function (elementToSlideOpen) {
    elementToSlideOpen[0].classList.remove(this.closed, this.orgin);
    elementToSlideOpen[0].classList.add(this.opened);
  },

  slideUp: function (element) {
    element.classList.remove(this.opened);
    element.classList.add(this.closed);
  },

  init: function () {
    var self = this;
    var button = self.button;
    var ctaSection = self.ctaSection;

    for (var i = 0; i < button.length; i++) {
      button[i].addEventListener("click", function e(event) {
        ctaSection.forEach(function (element) {
          var contactUsUnderClickedButton = event.target.closest('section').getElementsByClassName('.contactUs');

          if (contactUsUnderClickedButton !== element) {

            self.slideUp(element);

          }
        });
        self.slideDown(event.target.closest("section").getElementsByClassName("contactUs"))
      })
    }
  }
}
contactUs.init()