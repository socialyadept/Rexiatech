$(document).ready(() => {
    $(".services a").hover(function () {
        var value = $(this).index() + 1;
        hoverContent(value);
    });

    function hoverContent(value) {
        $("a:nth-child(" + value + ") .div-block").toggleClass('inverse');
        $("a:nth-child(" + value + ") span").toggleClass('inverse spanhover');
        $("a:nth-child(" + value + ") h5").toggleClass('inverse');

        // $(".services a:nth-child(" + value + ")").addClass("show");
        // $("#bg").removeClass();
        // $("#bg").addClass(image[value]);
    }
});