console.log("ES5")
var contactUs = {
  buttons: document.querySelectorAll(".imageText__button"),
  ctaSection: document.querySelectorAll('.contactUs'),
  opened: "contactUs--opened",
  closed: "contactUs--closed",

  slideDown: function (elementToSlideOpen) {
    elementToSlideOpen.classList.remove(this.closed);
    elementToSlideOpen.classList.add(this.opened);
  },

  slideUp: function (elem) {
    elem.classList.remove(this.opened);
    elem.classList.add(this.closed);
  },

  init: function () {
    var self = this;
    var buttons = self.buttons;
    var ctaSection = self.ctaSection;
    console.log(ctaSection);


    for (var i = 0; i < buttons.length; i++) {
      // var temp = buttons[i];
      // console.log(temp);

      buttons[i].addEventListener('click', function () {

        var event = new CustomEvent('clickedButton');
        // console.log(event);
        //  console.log(ctaSection);
        console.log(temp)
        ctaSection[i].dispatchEvent(event);
      });
    }

    // buttons.forEach(function (e) {
    //   console.log(e);
    // })

    for (var i = 0; i < ctaSection.length; i++) {
      ctaSection[i].addEventListener('clickedButton', function (e) {
        console.log(e.target);

        self.slideDown(e.target);

        ctaSection.forEach(function (elem) {
          if (e.target !== elem) { // Das nicht geklickte schon auf ist, wird slideUp
            self.slideUp(elem);
          }
        });
      });
    }
  }
}
contactUs.init()