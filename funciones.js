// Ocultamos el menu que se muestra cuando scrolleamos.
$('.containerlittle').hide();

// Mostramos u ocultamos el menu cuando scrolleamos.
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 450) {
        $('.containerlittle').show();
    } else {
        $('.containerlittle').hide();
    }
});

// Asignamos la clase .selected a cada item del menú que se clickea
// para poder estilarlo.
$('.menu a').click(function() {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
});

