console.log('jQuery');
/*
$('.imageText__button ').click(function (event) {
  $('.contactUs').removeClass('contactUs--closed');
  $(event.target).closest('section').find('.contactUs').addClass('contactUs--opened');
  $('.contactUs').not($(event.target).closest('section').find('.contactUs')).removeClass('contactUs--opened').addClass('contactUs--closed');
});
*/

$('.imageText__button ').click(function (event) {
  $('.contactUs').trigger('clickedButton', event);
});

$('.contactUs').on('clickedButton', function () {
  $(event.target).closest('section').find('.contactUs').addClass('contactUs--opened');
  $('.contactUs').not($(event.target).closest('section').find('.contactUs')).removeClass('contactUs--opened').addClass('contactUs--closed');
});