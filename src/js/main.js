//ES5
//PLAIN JS change SCSS file first

function slide(elementToSlideOpen) {

  if (elementToSlideOpen.classList.contains('contactUs--origin', 'contactUs--hidden')) {

    elementToSlideOpen.classList.remove('contactUs--origin', 'contactUs--hidden');
    elementToSlideOpen.classList.add('contactUs--visible');

  } else if (elementToSlideOpen.classList.contains('contactUs--visible')) {

    elementToSlideOpen.classList.remove('contactUs--visible');
    elementToSlideOpen.classList.add('contactUs--hidden', 'contactUs--origin');

  }
}

var button = document.getElementsByClassName('imageText__button');

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function e(event) {
    slide(event.target.closest('section').getElementsByClassName('contactUs'))
  });
}