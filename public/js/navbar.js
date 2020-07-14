let navbar = $('#navbar');
let sticky = navbar.offset();

$('window').scroll(myFunction());

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= sticky.top) {
        navbar.addClass('sticky')
        console.log(navbar);

    } else {
        navbar.removeClass('sticky');
    }
}
