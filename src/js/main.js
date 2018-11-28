console.log("ES6");
const contactUs = {

  button: document.getElementsByClassName("imageText__button"),
  ctaSection: document.querySelectorAll('.contactUs'),
  opened: "contactUs--opened",
  closed: "contactUs--closed",

  init() {
    this.toggleBox();
  },

  slideDown(elementToSlideOpen) {
    elementToSlideOpen.classList.remove(this.closed);
    elementToSlideOpen.classList.add(this.opened);
  },

  slideUp(elem) {
    elem.classList.remove(this.opened);
    elem.classList.add(this.closed);
  },

  toggleBox() {

    for (let i = 0; i < this.button.length; i++) {
      this.button[i].addEventListener('click', () => {

        let event = new CustomEvent('clickedButton');

        this.ctaSection[i].dispatchEvent(event);
      });
    }

    for (let i = 0; i < this.ctaSection.length; i++) {
      this.ctaSection[i].addEventListener('clickedButton', (e) => {
        console.log(e.target);

        this.slideDown(e.target);

        this.ctaSection.forEach(elem => {
          if (e.target !== elem) {
            this.slideUp(elem);
          }
        });
      });
    }
  }
}
contactUs.init();