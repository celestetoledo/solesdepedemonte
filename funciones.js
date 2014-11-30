$('.containerlittle').hide();

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 450) {
        $('.containerlittle').show();
    } else {
        $('.containerlittle').hide();
    }
});

