$(document).ready(function() {
    // Wow js init here 
    new WOW().init();

    // success message js here 
    $('.sign-up-form .btn').click(function() {
        $('.success-message').addClass('show');
    });

    $('.newsletter-form .btn').click(function() {
        $('.subscribe-mail').addClass('show');
    });


    // Header navigation Js
    $('.navbar-toggler').click(function() {
        $(this).siblings('.main-navigation').toggleClass('show');
        $('body').toggleClass('noscroll');
    });

    // Sticky header js
    var headerHeight = $('.site-header').height();
    $(window).on('resize scroll load', function() {
        if ($(this).scrollTop() >= headerHeight) {
            $('.site-header').addClass('bg-color sticky');
        } else {
            $('.site-header').removeClass('bg-color sticky');
        }
    });

    // map js here 
    $("path, circle").hover(function(e) {
        $('#info-box').css('display', 'block');
        $('#info-box').html($(this).data('info'));
    });

    $("path, circle").mouseleave(function(e) {
        $('#info-box').css('display', 'none');
    });

    $(document).mousemove(function(e) {
        $('#info-box').css('top', e.pageY - $('#info-box').height() - 30);
        $('#info-box').css('left', e.pageX - ($('#info-box').width()) / 2);
    }).mouseover();

    var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (ios) {
        $('a').on('click touchend', function() {
            var link = $(this).attr('href');
            window.open(link, '_blank');
            return false;
        });
    }
});