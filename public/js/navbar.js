$(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop();

    if (scrollTop > 1) {
        $('nav').addClass('sticky-top-scroll');
        $('nav').removeClass('nav-border bg-white');

    } else {
        $('nav').removeClass('sticky-top-scroll');
        $('nav').addClass('nav-border bg-white');


    }


}); 