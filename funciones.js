$('.menu-little').hide();

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
        $('.menu-little').show();
    } else {
        $('.menu-little').hide();
    }
});


