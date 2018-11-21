//ES6
const namespace = {

  slideDown(elementToSlideOpen) {
    console.log(elementToSlideOpen)
    elementToSlideOpen.classList.remove('contactUs--origin', 'contactUs--hidden');
    elementToSlideOpen.classList.add('contactUs--visible');
  },

  slideUp(element) {
    console.log(element)
    element.classList.remove('contactUs--visible');
    element.classList.add('contactUs--hidden', 'contactUs--origin');
  }
}

let button = document.querySelectorAll('.imageText__button');
let contactUs = document.querySelectorAll('.contactUs')

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', (event) => {
    console.log(event.target);

    namespace.slideDown(event.target.closest('section').querySelector('.contactUs'));
  })
}

for (let i = 0; i < contactUs.length; i++) {
  contactUs[i].addEventListener('clickedButton', (e) => {
    console.log("button has been clicked")

  })

  let event = new CostumEvent('clickedButton', {

  });

  contactUs.dispatchEvent(event);
}



for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('clickedButton', (e) => {
    console.log("button has been clicked")

  })

  let event = new CostumEvent('clickedButton', {

  });

  button.dispatchEvent(event);
}






// let button = document.querySelectorAll('.imageText__button');

// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener('click', (event) => {
//     console.log(event.target);

//     document.querySelectorAll('.contactUs').forEach(element => {
//       if (event.target.closest('section').querySelector('.contactUs') !== element) {
//         namespace.slideUp(element)
//       }
//     });
//     namespace.slideDown(event.target.closest('section').querySelector('.contactUs'));
//   })
// }