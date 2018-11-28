console.log("ES5")
var contactUs = {
  buttons: document.querySelectorAll(".imageText__button"),
  ctaSection: document.querySelectorAll('.contactUs'),
  opened: "contactUs--opened",
  closed: "contactUs--closed",

  init: function () {
    this.toggleBox();
  },

  slideDown: function (elementToSlideOpen) {
    elementToSlideOpen.classList.remove(this.closed);
    elementToSlideOpen.classList.add(this.opened);
  },

  slideUp: function (elem) {
    elem.classList.remove(this.opened);
    elem.classList.add(this.closed);
  },

  toggleBox: function () {
    var self = this;

    for (var i = 0; i < self.buttons.length; i++) {
      self.buttons[i].addEventListener('click', function (e) {
        var myEvent = new CustomEvent('clickedButton');
        e.target.closest('section').querySelector('.contactUs').dispatchEvent(myEvent);
      });
    }

    for (var i = 0; i < self.ctaSection.length; i++) {
      self.ctaSection[i].addEventListener('clickedButton', function (e) {
        self.slideDown(e.target);
        self.ctaSection.forEach(function (elem) {
          if (e.target !== elem) {
            self.slideUp(elem);
          }
        });
      });
    }
  }
}
contactUs.init()