$(document).ready(function () {
    $('.list li').click(function(e){
        e.preventDefault;
        $(this).toggleClass('active');
        $(this).parent().siblings().removeClass('active');
        $(this).find('.dropDown').slideToggle();
    });

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        fadeEffect: {
            crossFade: true
          },

    })
});