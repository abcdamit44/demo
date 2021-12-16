// $("#collapse").click(function() {
//     $(".blogNav").toggle();
// });

$(document).ready(function() {
    $('#collapse').on('click', function() {
        $('.blogNav ul').toggleClass('show');
    });
    $('#collapse').on('click', function() {
        $('.blogNav form').toggleClass('show');
    });
});
$(window).scroll(function() {

    if ($(window).scrollTop() >= 0 && $(window).scrollTop() <= 500) {
        $("header").css("background", "transparent");
    } else {
        $("header").css("background", "rgb(39, 39, 39, 0.5)");
        $("header").css("transition", "0.5s");

    }
});