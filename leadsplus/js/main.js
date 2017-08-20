(function ($) {
    "use strict";
    /*
    |--------------------------------------------------------------------------
    |   Template Name: LeadsPlus
    |   Author: Pressionate
    |   Version: 1.0.0
    |--------------------------------------------------------------------------
    |--------------------------------------------------------------------------
    | TABLE OF CONTENTS:
    |--------------------------------------------------------------------------
    |
    | 1. Scripts initialization
    | 2. Preloader
    | 3. Primary Menu
    | 4. Scroll Function
    | 5. Scroll Up
    | 6. Owl Carousel
    | 7. Smooth Scroll
    | 8. Section Active
    |
    */
    /*--------------------------------------------------------------
      1. Scripts initialization
    --------------------------------------------------------------*/

    $(document).ready(function () {
        $(window).trigger("resize");
        primaryMenuSetup();
        mobileMenu();
        scrollUp();
        owlCarouselSetup();
        smoothScrollSetup();
        sectionActive();
    });
    $(window).on('resize', function () {
        mobileMenu();
    });
    $(window).on('scroll', function () {
        scrollFunction();
    });
    /*--------------------------------------------------------------
      2. Preloader
    --------------------------------------------------------------*/
    $(window).on('load', function () {

        $("body").imagesLoaded(function () {
            $(".p-preloader-wave").fadeOut();
            $("#p-preloader").delay(200).fadeOut("slow").remove();
        });

    });
    /*--------------------------------------------------------------
      3. Primary Menu
    --------------------------------------------------------------*/
    function primaryMenuSetup() {
        $(".primary-nav-list").before("<div class='m-menu-btn'><span></span></div>");
        $(".m-menu-btn").on('click', function () {
            $(this).toggleClass("m-menu-btn-ext");
            $(this).siblings('.primary-nav-list').slideToggle(800);
        });
        $(".menu-item-has-children > ul").before("<i class='fa fa-plus m-dropdown'></i>");
        $('.m-dropdown').on('click', function () {
            $(this).siblings('ul').slideToggle("slow");
            $(this).toggleClass("fa-plus fa-minus");
        });
    }

    function mobileMenu() {
        if ($(window).width() <= 991) {
            $('.primary-nav').addClass('m-menu').removeClass('primary-nav');
        } else {
            $('.m-menu').addClass('primary-nav').removeClass('m-menu');
        }
    }
    /*--------------------------------------------------------------
      4. Scroll Function
    --------------------------------------------------------------*/
    function scrollFunction() {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $(".site-header").addClass("small-height");
        } else {
            $(".site-header").removeClass("small-height");
        }
        if (scroll >= 350) {
            $(".scrollup").addClass("scrollup-show");
        } else {
            $(".scrollup").removeClass("scrollup-show");
        }
    }
    /*--------------------------------------------------------------
      5. Scroll Up
    --------------------------------------------------------------*/
    function scrollUp() {
        $("body").append("<span class='scrollup'></span>");
        $('.scrollup').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        });
    }
    /*--------------------------------------------------------------
      6. Owl Carousel
    --------------------------------------------------------------*/
    function owlCarouselSetup() {
        /* Owl Carousel For hero-slider */
        $('.hero-slider').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 900,
            autoplayTimeout: 5000
        });

        /* Owl Carousel For testimonial-carousel */     
        $('.testimonial-carousel').owlCarousel({
            items:1,
            loop:true,
            margin: 30,
            dots: true,
            autoplay:false,
            smartSpeed: 700,
            autoplayTimeout:4000
        });
        // Stop Carousel testimonial-carousel On MouseEnter
        $(".testimonial-carousel-text").mouseenter(function(){
            $('.testimonial-carousel').trigger('stop.owl.autoplay')
        });
        // Start Carousel testimonial-carousel On MouseLeave
        $(".testimonial-carousel-text").mouseleave(function(){
            $('.testimonial-carousel').trigger('play.owl.autoplay')
        });
    }
    /*--------------------------------------------------------------
      7. Smooth Scroll
    --------------------------------------------------------------*/
    function smoothScrollSetup() {
        $('.smooth-scroll').click(function () {
            var linkHref = $(this).attr('href');
            var headerH = '70';
            $('html, body').animate({
                scrollTop: $(linkHref).offset().top - headerH + "px"
            }, 1000);
        });
    }
    /*--------------------------------------------------------------
      8. Section Active
    --------------------------------------------------------------*/
    function sectionActive() {
        $('body').scrollspy({
            target: '.site-header',
            offset: 70
        });
    }
})(jQuery); // End of use strict