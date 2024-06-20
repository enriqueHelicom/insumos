$("document").ready(function($){

    const topProducts = $('.top__products-cards'),
          specialServices = $('.carousel__services');

    topProducts.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                dots: false,
                nav: false,
            },

            390: {
                dots: false,
                nav: false,
                items: 2,
            },

            768: {
                dots: false,
                nav: false,
                items: 3,
            },

            992: {
                dots: false,
                nav: false,
                items: 5,
            },
        }
    });

    specialServices.owlCarousel({
        items: 4,
        loop: false,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                autoplay: true,
                dots: false,
                nav: false,
            },

            390: {
                loop: true,
                autoplay: true,
                dots: false,
                nav: false,
                items: 1,
            },

            768: {
                dots: false,
                nav: false,
                items: 3,
            },

            992: {
                dots: false,
                nav: false,
                items: 4,
            },
        }
    });


});