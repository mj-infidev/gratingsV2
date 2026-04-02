/**
 * Product Detail Page - Common JS
 * Shared accordion & carousel logic for all product detail pages.
 */

// Accordion toggle (one panel open at a time — exclusive mode)
$(document).ready(function () {
    $('.accordion-header').on('click', function () {
        var target = $(this).data('target');
        var $body = $('#' + target);
        var $icon = $(this).find('.acc-icon');
        var isAlreadyOpen = $body.hasClass('active');

        // Close all open panels first
        $('.accordion-body.active').removeClass('active').slideUp();
        $('.accordion-header.active').removeClass('active')
            .find('.acc-icon')
            .removeClass('bi-dash-lg')
            .addClass('bi-plus-lg');

        // If the clicked panel was not already open, open it
        if (!isAlreadyOpen) {
            $body.addClass('active').slideDown();
            $(this).addClass('active');
            $icon.removeClass('bi-plus-lg').addClass('bi-dash-lg');
        }
    });

    // Auto-open the Surfaces accordion on page load
    var $surfBody = $('#acc-surfaces');
    if ($surfBody.length) {
        var $surfHeader = $surfBody.closest('.accordion-card').find('.accordion-header');
        $surfBody.addClass('active').show();
        $surfHeader.addClass('active');
        $surfHeader.find('.acc-icon').removeClass('bi-plus-lg').addClass('bi-dash-lg');
    }

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
