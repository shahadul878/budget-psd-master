(function ($) {
    "use strict";
    /* ==================== Table Of Content ====================
    1.	Script Initialization
    2.	preloaderSetup
    3.	Mobile Menu
    4.  Hero Slider
    5.  Services Filter
    6. Testimonials Slider
    ===========================================================*/
    /* ================================================
       Script Initialization
    ==================================================*/

    // Window Load Function
    $(window).on('load', function () {
        preloaderSetup();
        heroSlider();

    });

    // Document Ready Function
    $(document).ready(function () {
        animations();
        mobileMenu();
        tableAccordin();

    });

    // Window Resize Function
    $(window).on('resize', function () {});

    // Window Scroll Function
    $(window).on('scroll', function () {});

    // ========================== preloaderSetup ==========================
    function preloaderSetup() {
        $('#preloader')
            .fadeOut('slow', function () {
                $(this).remove();
            });
    } // preloaderSetup

    // ========================== Animations ==========================
    function animations() {
        AOS.init({
            offset: 50
        });


    }

    // ========================== Mobile Responsive Menu ==========================
    function mobileMenu() {
        var menu = $('.page-sidebar').html();
        var mobMenu = '<div class="mobile-menu-slide py-4">' + menu + '</div>';
        $('body').prepend(mobMenu);

        $('.mobile-menu-icon').on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            $('.mobile-menu-slide').addClass('show');
        })

        // Hide on click outside
        $(document).on('click', function (e) {
            if (!(e.target.closest('.mobile-menu-slide'))) {
                $('.mobile-menu-slide').removeClass('show');
            }
        })

    }
    // ========================== HeroSlider ==========================
    function heroSlider() {
        var slider = $('.table-slider-init');
        var sliderNav = $('.table-slider-nav ul');
        slider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/arrow-left.png" ></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="assets/img/arrow-right.png" ></button>',
            asNavFor: sliderNav,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 5000,
            focusOnSelect: true,
            centerMode: false,
            responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,

                }
            }]
        })
        sliderNav.slick({
            slidesToShow: 12,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            asNavFor: slider,
            dots: false,
            focusOnSelect: true,
            vertical: false,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }]
        })

    }

    // Accordion
    function tableAccordin() {
        var rootColl = $('[data-root-collapse]');
        // hide block area
        $('.collapse-block-area').hide();
        rootColl.each(function (i, li) {
            $(li).click(function () {
                var rootCollItem = this.getAttribute('data-root-collapse');
                var expand = this.getAttribute('aria-expanded');

                if (expand == 'true') {
                    var trigger = $("." + rootCollItem);

                    trigger.each(function (i, t) {
                        var triggerExpand = t.getAttribute('aria-expanded');
                        if (triggerExpand == 'true') {

                            $(t).trigger("click");
                        }
                    })
                    // hide block area
                    $('.collapse-block-area').hide();

                } else {
                    // show block area
                    $('.collapse-block-area').show();
                    return null;
                }


            });
        })


    }



})(jQuery); // End of use strict