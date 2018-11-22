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

  slideUp(element) {
    console.log("slideUp");
    element.classList.remove(this.opened);
    element.classList.add(this.origin, this.closed);
  },

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
}
contactUs.init();