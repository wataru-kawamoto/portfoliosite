$(function(){
    $('.container').on('click', function () {
        $('.nav_toggle, .nav, .nav_menu_ul').toggleClass('show');
    });
});

$(function() {
    $('.top-text').hide().fadeIn('slow');
});

$(function() {
    $('.pf-title').hide().fadeIn('slow');
});

$(function() {
    $('.contactform-item').hide().fadeIn('slow');
});

$(function() {
    $('.nav_menu_li_1').on('click', function() {
        $('.portfolio, .contact').fadeOut(1000);
        $('.top').fadeIn(1500);
    });
});

$(function() {
    $('.nav_menu_li_2').on('click', function() {
        $('.top, .contact').fadeOut(1000);
        $('.portfolio').fadeIn(1500);
    });
});

$(function() {
    $('.nav_menu_li_3').on('click', function() {
        $('.top, .portfolio').fadeOut(1000);
        $('.contact').fadeIn(1500);
    });
});
