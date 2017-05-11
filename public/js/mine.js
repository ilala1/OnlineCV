function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function () {
    $(".button-collapse").sideNav();
})

// restricting page scrolling
$(document).ready(function () {
    $('.collapsible').collapsible();
    var eTop = $("#test").offset().top;
    $(document).scrollTop(eTop);
    var eHeight = $("#test").height();
    var eBottom = eTop + eHeight - $(window).height(150);
    $(document).on("scroll", function (e) {
        var windowScrollTop = $(window).scrollTop();
        if (windowScrollTop < eTop) {
            console.log("not allowed");
            $(document).scrollTop(eTop);
        }
        else if (windowScrollTop > eBottom) {
            $(document).scrollTop(eBottom);
        }
        else {
            console.log("allowed");
        }
    });
});

// navbar color change
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $("nav").css('background-color', 'black');
            } else {
                $('nav').css('background-color', 'transparent');
            }
        });
    }
});

//smooth scroll
$('.scrollspy').click(function (e) {
    let linkHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(linkHref).offset().top - 30
    }, 1000);
    e.preventDefault(); //removes section name from url
});

// bouncing on scroll
$(function () {
    var choice = [
        { selector: '.edu', offset: 200, callback: '$(".edu").addClass("bounceInRight animated").css("visibility", "visible")' }
        // {selector: '.picTxt', offset: 0.1, callback: '$(".picTxt").addClass("bounceInLeft animated").css("visibility", "visible")'}
    ];

    Materialize.scrollFire(choice);
});

// back to the top button
jQuery(document).ready(function ($) {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 10000,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 65,
        }, scroll_top_duration
        );
    });
});
