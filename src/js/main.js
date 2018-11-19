//ES5
//PLAIN JS change SCSS file first





function slide(elementToSlideOpen) {
  console.log(elementToSlideOpen[0])
  var element = elementToSlideOpen[0];

  if (element.classList.contains('contactUs--origin', 'contactUs--hidden')) {

    element.classList.remove('contactUs--origin', 'contactUs--hidden');
    element.classList.add('contactUs--visible');

  } else if (element.classList.contains('contactUs--visible')) {

    element.classList.remove('contactUs--visible');
    element.classList.add('contactUs--hidden', 'contactUs--origin');

  }
}

var button = document.getElementsByClassName('imageText__button');

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function e(event) {
    slide(event.target.closest('section').getElementsByClassName('contactUs'))
  })
}