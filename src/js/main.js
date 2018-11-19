//jQuery change SCSS file first
$('.contactUs').hide();
$('.imageText__button').click(function (event) {
  $(event.target).closest('section').find('.contactUs').slideToggle(400);
});