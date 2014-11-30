$('.containerlittle').hide();

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
<<<<<<< Updated upstream
    if (scroll > 450) {
=======
    if (scroll > 500) {
>>>>>>> Stashed changes
        $('.containerlittle').show();
    } else {
        $('.containerlittle').hide();
    }
});

