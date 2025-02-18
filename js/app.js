var app = {};

app.$root = $("html, body");

app.windowSize = function () {
    var e = window,
        a = "inner";
    if (!("innerWidth" in window)) {
        a = "client";
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + "Width"],
        height: e[a + "Height"],
    };
};

// header
var _header = function () {
    $(document).on("click", ".menu-toggle", function (e) {
        e.preventDefault();

        $("#mega-menu").toggleClass("active");
        setTimeout(( () => {
            $("#mega-menu").toggleClass("animated");
        }), 400);
        $("body").toggleClass("overflow-hidden");
    });
};

// portal section
var _portalnavigation = function () {
    $( "[data-navbackground-id]" ).hover(
        function() {
            console.log('hover');
            const navbackgroundid = $( this ).data('navbackground-id');
            if ( navbackgroundid != '' ) {
                $( ".nav-hover-background, [data-navbackground]" ).removeClass('active');
                $('.nav-hover-background, [data-navbackground="'+navbackgroundid+'"]').addClass('active');
            }
        }, function() {
            $( ".nav-hover-background, [data-navbackground]" ).removeClass('active');
        }
    );
};

// sliders
var _sliders = function () {
    var servicesSwiper = new Swiper(".testimonial-slider", {
        slidesPerView: 1,
        spaceBetween: 150,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    var singlephotoSwiper = new Swiper(".singlephoto-slider", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
};


$(document).ready(function () {
    _header();
    _portalnavigation();
    _sliders();

    // plugins init
    AOS.init({
        once: true,
        duration: 500,
    });
});
