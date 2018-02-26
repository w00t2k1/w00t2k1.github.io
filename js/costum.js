/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50 && $(window).width() > 767) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-nav").addClass("navbar-nav-custom");
        $(".logo").hide();
        //$(".logo2").show();
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-nav").removeClass("navbar-nav-custom");
        $(".logo").show();
        //$(".logo2").hide();
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


