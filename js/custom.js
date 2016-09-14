
jQuery(document).ready(function () {

    function mobile() {
        var checkWidth = $(window).width();
        var demo = $(".ow-trere");
        var demo2 = $("#owl3");
        if (checkWidth > 767) {
            demo.addClass('owl-carousel');
            demo.owlCarousel({
                singleItem:true,
                items:5,
                dots: false,
                nav:true,
                responsiveRefreshRate:5,
                responsiveBaseWidth: window,
                responsiveClass: true,
                smartSpeed: 900,
                paginationSpeed : 800,
                rewindSpeed : 1000,
                mouseDrag: false,
                touchDrag: false,
                navText:["<i class='fa-left fa-icon'></i>",
                    "<i class='fa-right fa-icon'></i>"],
                responsive: {
                    0: {
                        items: 1,
                        nav: false,

                    },
                    768: {
                        items: 3,
                        nav: true,

                    },
                    1023: {
                        items: 5,
                        nav: true,


                    }
                },


            });
            demo2.addClass('owl-carousel');
            demo2.owlCarousel({
                singleItem:true,
                items:4,
                dots: false,
                nav:true,
                responsiveRefreshRate:5,
                responsiveBaseWidth: window,
                responsiveClass: true,
                smartSpeed: 900,
                paginationSpeed : 800,
                rewindSpeed : 1000,
                mouseDrag: false,
                touchDrag: false,
                navText:["<i class='fa-left fa-icon'></i>",
                    "<i class='fa-right fa-icon'></i>"],
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                    },
                    768: {
                        items: 3,
                        nav: true,
                    },
                    1023: {
                        items: 4,
                        nav: false,

                    }
                },


            });
            $('.btn-leader').click(function(){
                $(".owl-carousel").addClass('animated slideInRight');
                $("#n-leader .owl-carousel").removeClass('animated slideInRight');
                $("#millionaire .owl-carousel").removeClass('animated slideInRight');
            });
            $('.btn-n-leader').click(function(){
                $(".owl-carousel").addClass('animated slideInRight');
                $("#leader .owl-carousel").removeClass('animated slideInRight');
                $("#millionaire .owl-carousel").removeClass('animated slideInRight');
            });
            $('.btn-millionaire').click(function(){
                $(".owl-carousel").addClass('animated slideInRight');
                $("#leader .owl-carousel").removeClass('animated slideInRight');
                $("#n-leader .owl-carousel").removeClass('animated slideInRight');
            });

        } else if (checkWidth < 768) {

            demo.removeClass('owl-carousel');
            demo2.removeClass('owl-carousel');

            $('.btn-leader').click(function(){
                $("#owl1").addClass('animated zoomIn');
                $(".owl-carousel").removeClass('animated slideInRight');
                $("#owl2").removeClass('animated zoomIn');
                $("#owl3").removeClass('animated zoomIn');
            });
            $('.btn-n-leader').click(function(){
                $("#owl2").addClass('animated zoomIn');
                $(".owl-carousel").removeClass('animated slideInRight');
                $("#owl1").removeClass('animated zoomIn');
                $("#owl3").removeClass('animated zoomIn');
            });
            $('.btn-millionaire').click(function(){
                $("#owl3").addClass('animated zoomIn');
                $(".owl-carousel").removeClass('animated slideInRight');
                $("#owl2").removeClass('animated zoomIn');
                $("#owl1").removeClass('animated zoomIn');
            });

        }

    }

    $(document).ready(mobile);
    $(window).resize(mobile);
});


//скрытие элементов
$('.btn-leader').click(function(){
    $(".walk__wrapper").addClass("opaque");
    $(".tab-content ").css("display", "block");
    $(".header__tabs-logo").css("display", "block");
    $(".header__home-logo").css("display", "none");
});
$('.btn-n-leader').click(function(){
    $(".walk__wrapper").addClass("opaque");
    $(".tab-content ").css("display", "block");
    $(".header__tabs-logo").css("display", "block");
    $(".header__home-logo").css("display", "none");
});
$('.btn-millionaire').click(function(){
    $(".walk__wrapper").addClass("opaque");
    $(".tab-content ").css("display", "block");
    $(".header__tabs-logo").css("display", "block");
    $(".header__home-logo").css("display", "none");
});
$('.header__tabs-title').click(function(){
    $(".header__home-logo").css("display", "block");
    $(".walk__wrapper").removeClass("opaque");
    $(".header__tabs-logo").css("display", "none");
    $(".nav-tabs li").removeClass("opacity_li");
    $(".nav-tabs li").removeClass("active");
    $(".tab-content ").css("display", "none");
    
});
//opasity btn
$(".nav-tabs").on("click", "li", function(){

    $(".nav-tabs li").addClass("opacity_li");
    $(this).removeClass("opacity_li");
});

