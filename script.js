$(document).ready(function () {
    $('.navbar ul').click(function(e){
        e.preventDefault();
        $('.dropDown').toggleClass('active');
        $('.dropDown').slideToggle();

    })
});