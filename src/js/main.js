//jQuery change SCSS file first
// $('.contactUs').hide();
// $('.imageText__button').click(function (event) {
//   $(".contactUs").removeClass("contactUs--origin");
//   $(event.target).closest('section').find('.contactUs').slideToggle(500);
// });

$('.contactUs').hide();
$('.imageText__button').click(function (event) {
  $(".contactUs").removeClass("contactUs--origin");
  $(event.target).closest('section').find('.contactUs').slideToggle(500);
  $('.contactUs').not($(event.target).closest('section').find('.contactUs')).slideUp(500);
});