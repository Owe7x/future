$('.checkbox').click(() => {
    $('.menu-items').toggleClass('menu-items-active')
    $('.page').toggleClass('page-active')
})

$('.page-thanks').css('height' , window.innerHeight);

$('.slider-mb-fest').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });;

$('.slider-mb-for').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });;
  $('.slider-mb-event').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });;