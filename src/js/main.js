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

    for (let i = 0; i < self.buttons.length; i++) { //with var ERROR dispatchEvent is undefined and with let it works

      self.buttons[i].addEventListener('click', function () {
        var myEvent = new CustomEvent('clickedButton');
        // console.log(self.ctaSection[i]);
        // console.log(ctaSection)

        // console.log(event.target);

        self.ctaSection[i].dispatchEvent(myEvent);

      });
    }
    // buttons.forEach(function (e) {
    //   e.addEventListener('click', function () {
    //     var event = new CustomEvent('clickedButton');

    //     console.log(ctaSection)
    //     ctaSection.forEach(function () {
    //       ctaSection[i].dispatchEvent(event);
    //     })
    //   });

    // })

    for (var i = 0; i < self.ctaSection.length; i++) {
      self.ctaSection[i].addEventListener('clickedButton', function (e) {
        console.log("Working");
        // console.log(e);

        self.slideDown(e.target);

        self.ctaSection.forEach(function (elem) {
          if (e.target !== elem) { // Das nicht geklickte schon auf ist, wird slideUp
            self.slideUp(elem);
          }
        });
      });
    }
  }
}
contactUs.init()