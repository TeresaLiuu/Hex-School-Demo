$(document).ready(function () {
    $('.list li').click(function (e) {
        e.preventDefault;
        $(this).toggleClass('active');
        $(this).parent().siblings().removeClass('active');
        $(this).find('.dropDown').slideToggle();
    });

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        speed: 3000,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    $('.scrollTop a').click(function (e) {
        e.preventDefault;
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })
});
