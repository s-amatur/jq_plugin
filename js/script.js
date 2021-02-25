$('document').ready(function() {
    // counterup
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // wowjs
    new WOW().init();
    // slick
    $('.autoplay').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });



});