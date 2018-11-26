console.log('jQuery');
$('.contactUs').hide();

$('.imageText__button ').click(function (event) {
  console.log(event.target);

  $('.contactUs').removeClass('contactUs--closed');
  console.log($('.contactUs ').removeClass('contactUs--closed'));

  $(event.target).closest('section').find('.contactUs').addClass('contactUs--opened');
  $('.contactUs').not($(event.target).closest('section').find('.contactUs')).removeClass('contactUs--opened').addClass('contactUs--closed');
});