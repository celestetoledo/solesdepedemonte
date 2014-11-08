$('.menu-little').hide();

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 550) {
        $('.menu-little').show();
    } else {
        $('.menu-little').hide();
    }
});


