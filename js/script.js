//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
});

if (window.innerWidth < 1022) {
  $('.footer__title').click(function() {
    $(this).next().slideToggle();
  });
};
