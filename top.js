$(function(){
    $('.container').on('click', function () {
        $('.nav_toggle, .nav, .nav_menu_ul').toggleClass('show');
    });
});

$(function() {
    $('.top-text').hide().fadeIn('slow');

    $('.pf-title').hide().fadeIn('slow');

    $('.contactform-item').hide().fadeIn('slow');

    $('.profile-list').hide().fadeIn('slow');
});


$(function() {
    $('.nav_menu_li_1').on('click', function() {
        $('.portfolio, .contact, .profile').fadeOut(1000);
        $('.top').fadeIn(2000);
    });

    $('.nav_menu_li_2').on('click', function() {
        $('.top, .contact, .profile').fadeOut(1000);
        $('.portfolio').fadeIn(2000);
    });

    $('.nav_menu_li_3').on('click', function() {
        $('.top, .portfolio, .profile').fadeOut(1000);
        $('.contact').fadeIn(2000);
    });

    $('.nav_menu_li_4').on('click', function() {
        $('.top, .portfolio, .contact').fadeOut(1000);
        $('.profile').fadeIn(2000);
    });
});

$(function() {
    $('.submit_btn input').on('click', function() {
        alert('現在は送信されません。');
    });
});

$(function() {
    $('.top').bgswitcher({
        images:["image/jr-korpa-kQwS0t_EDqQ-unsplash-min.jpg", "image/solen-feyissa-Kp1tkDWFvMI-unsplash-min.jpg","image/greg-rosenke-syZhH19b1Z8-unsplash-min.jpg"],
        loop: true,
        interval: 5000,
        effect: "fade",
    });
});

// $(function() {
//     if($('.nav_menu_li_2','nav_menu_li_3','nav_menu_li_4').on('click')) {
//         $().bgswitcher({
//             images: ['none'],
//         });
//     } else if($('.nav_menu_li_1').on('click')) {
//         $(".top").bgswitcher({
//             images:["image/jr-korpa-kQwS0t_EDqQ-unsplash-min.jpg", "image/solen-feyissa-Kp1tkDWFvMI-unsplash-min.jpg","image/greg-rosenke-syZhH19b1Z8-unsplash-min.jpg"],
//             loop: true,
//             interval: 5000,
//             effect: "fade",
//         });
//     } else {
//         $(".top").bgswitcher({
//             images:["image/jr-korpa-kQwS0t_EDqQ-unsplash-min.jpg", "image/solen-feyissa-Kp1tkDWFvMI-unsplash-min.jpg","image/greg-rosenke-syZhH19b1Z8-unsplash-min.jpg"],
//             loop: true,
//             interval: 5000,
//             effect: "fade",
//         });
//     }
// });
