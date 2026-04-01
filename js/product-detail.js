/**
 * Product Detail Page - Common JS
 * Shared accordion & carousel logic for all product detail pages.
 */

// Accordion toggle (one panel open at a time using smoothly animated jQuery)
$(document).ready(function () {
    $('.accordion-header').on('click', function () {
        var target = $(this).data('target');
        var $body = $('#' + target);
        var $icon = $(this).find('.acc-icon');

        if ($body.hasClass('active')) {
            $body.removeClass('active').slideUp();
            $(this).removeClass('active');
            $icon.removeClass('bi-dash-lg').addClass('bi-plus-lg');
        } else {
            $body.addClass('active').slideDown();
            $(this).addClass('active');
            $icon.removeClass('bi-plus-lg').addClass('bi-dash-lg');
        }
    });

    new WOW().init();
});

// Owl Carousel - Product Overview Slider
$(document).ready(function () {
    $('.overview-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 400,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });
});
