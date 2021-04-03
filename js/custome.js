/* global */

$(function () {
    'use strict';
    
    $(".header").css({ background: "url(../image/1.jpg)" });
    $(".testin").css({ background: "url(../image/2.jpg)" });
    $(".contact").css({ background: "url(../image/2.jpg)" });
    // trigger
    $('html').niceScroll({ cursorcolor: '#f7600e' });
    //chang header hight
    $('.header').height($(window).height());
    // scrol to features
    $('.header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });
    $('.header .work ').click(function () {
        $('html, body').animate({
            scrollTop: $('.our-works').offset().top
        }, 1000);
    });
    //shw hidden
    $('.showmore').click(function () {
        $('.our-works .hidden').removeClass('hidden').fadeIn();
        $(".our-works .showmore").addClass("hidden");
    });
    $(".showless").click(function () {
        $(".our-works .hidden").addClass("hidden").fadeIn();
        $(".our-works .showless").addClass("hidden");
        $(".our-works .showmore").removeClass("hidden");
    });
    // check testin
    var leftArrow = $('.testin .fa-chevron-left'),
        rightArrow = $('.testin .fa-chevron-right');
    function checkClients() {
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }
    checkClients();
    $('.testin i').click(function () {

        if ($(this).hasClass('fa-chevron-right')) {

            $('.testin .active').fadeOut(100, function () {

                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
            
                checkClients();
            
            });

        } else {

            $('.testin .active').fadeOut(100, function () {

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
            
            });
            
                checkClients();
            
        }

    });
}); 