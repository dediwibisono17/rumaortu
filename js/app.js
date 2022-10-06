$(()=>{
    $(".scroll-to-menu").click(()=>{
        $('html, body').animate({
            scrollTop: $("#menus").offset().top
        }, 200);
    })
})

$(".hero-slide").slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$(".testimonial__content").slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
})


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});


$('.slider-for-two').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav-two'
  });
$('.slider-nav-two').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for-two',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});