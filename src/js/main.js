console.log("ES6");
const contactUs = {

  button: document.getElementsByClassName("imageText__button"),
  ctaSection: document.querySelectorAll('.contactUs'),
  opened: "contactUs--visible",
  closed: "contactUs--hidden",
  origin: "contactUs--origin",

  slideDown(elementToSlideOpen) {
    console.log("slideDown");
    elementToSlideOpen.classList.remove(this.origin, this.closed);
    elementToSlideOpen.classList.add(this.opened);
  },

  slideUp(e) {
    console.log("slideUp");
    console.log(e.target);
    e.target.classList.remove(this.opened);
    e.target.classList.add(this.origin, this.closed);
  },
  /*
    init() {
      let self = this;
      let button = self.button;
      let ctaSection = self.ctaSection;

      for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', (event) => {

          var contactUsUnderClickedButton = event.target.closest('section').querySelector('.contactUs');

          ctaSection.forEach(element => {
            if (contactUsUnderClickedButton !== element) {
              self.slideUp(element);
            }
          });
          self.slideDown(event.target.closest('section').querySelector('.contactUs'));
        })
      }
    }
    */


  init() {
    let self = this;
    let button = self.button;
    let ctaSection = self.ctaSection;

    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener('click', (elem) => {

        self.slideDown(elem.target.closest('section').querySelector('.contactUs'));
        var event = new CustomEvent('clickedButton');

        ctaSection[i].dispatchEvent(event);
      });
    }

    for (let i = 0; i < ctaSection.length; i++) {
      ctaSection[i].addEventListener('clickedButton', (e) => {
        var contactUsUnderClickedButton = e.target.closest('section').querySelector('.contactUs');
        if (contactUsUnderClickedButton !== e.target) { //Why does this not work? if(contactUsUnderClickedButton nicht dass geklickte ist geh hoch)
          console.log(e)
          self.slideUp(e);
        }
      });
    }

  }
}
contactUs.init();