/*
#################
# By ytika      #
# t.me/By-ytika #
#################
*/


$('.menu__link').on('click', function(e) {
  
    e.preventDefault;
  $(this).toggleClass('menu__link--active');
  $('.navs').toggleClass('visible');

});