console.log("ES6");
const contactUs = {

  button: document.getElementsByClassName("imageText__button"),
  ctaSection: document.querySelectorAll('.contactUs'),
  opened: "contactUs--opened",
  closed: "contactUs--closed",

  slideDown(elementToSlideOpen) {
    elementToSlideOpen.classList.remove(this.closed);
    elementToSlideOpen.classList.add(this.opened);
  },

  slideUp(elem) {
    elem.classList.remove(this.opened);
    elem.classList.add(this.closed);
  },

  init() {
    let self = this;
    let button = self.button;
    let ctaSection = self.ctaSection;

    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener('click', (el) => {

        let event = new CustomEvent('clickedButton');

        ctaSection[i].dispatchEvent(event);
      });
    }

    for (let i = 0; i < ctaSection.length; i++) {
      ctaSection[i].addEventListener('clickedButton', (e) => {
        console.log(e.target);

        self.slideDown(e.target);

        ctaSection.forEach(elem => {
          if (e.target !== elem) { // Das nicht geklickte schon auf ist, wird slideUp
            //console.log(elem)
            self.slideUp(elem);
          }
        });
      });
    }

  }
}
contactUs.init();




/*
    init() {
      let self = this;
      let button = self.button;
      let ctaSection = self.ctaSection;

      for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', (event) => {

          self.slideDown(event.target.closest('section').querySelector('.contactUs'));

          let contactUsUnderClickedButton = event.target.closest('section').querySelector('.contactUs');

          ctaSection.forEach(element => {
            if (contactUsUnderClickedButton !== element) {
              self.slideUp(element);
            }
          });
          
        })
      }
    }
    */