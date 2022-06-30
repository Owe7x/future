$('.checkbox').click(() => {
    $('.menu-items').toggleClass('menu-items-active')
    $('.page').toggleClass('page-active')
})

$('.page-thanks').css('height' , window.innerHeight);