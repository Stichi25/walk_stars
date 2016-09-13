jQuery(document).ready(function () {

    function mobile() {
        var checkWidth = $(window).width();
        var demo = $(".owl-carousel");
        if (checkWidth >= 768) {

            $(document).ready(function () {

                $('a[href="#leader"]').on('shown.bs.tab', function () {
                    initialize_owl($('#owl1'));
                }).on('hide.bs.tab', function () {
                    destroy_owl($('#owl1'));
                });

                $('a[href="#n-leader"]').on('shown.bs.tab', function () {
                    initialize_owl($('#owl2'));
                }).on('hide.bs.tab', function () {
                    destroy_owl($('#owl2'));
                });

                $('a[href="#mil"]').on('shown.bs.tab', function () {
                    initialize_owl1($('#owl3'));
                }).on('hide.bs.tab', function () {
                    destroy_owl1($('#owl3'));
                });

            });

            function initialize_owl(el) {
                el.owlCarousel({
                    loop: true,
                    margin: 10,
                    items : 5,
                    responsiveRefreshRate:50,
                    responsiveBaseWidth: window,
                    responsiveClass: true,
                    smartSpeed: 900,
                    paginationSpeed : 800,
                    rewindSpeed : 1000,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        768: {
                            items: 3,
                            nav: true
                        },
                        1023: {
                            items: 5,
                            nav: true

                        }
                    },
                    dots: false,
                    nav: true,
                    navText:["<i class='fa-left fa-icon'></i>",
                        "<i class='fa-right fa-icon'></i>"]


                });
            }

            function destroy_owl(el) {
                el.data('owlCarousel').destroy();
            }
            function initialize_owl1(el) {

                el.owlCarousel({
                    loop: false,
                    margin: 10,
                    items : 4,
                    responsiveRefreshRate:50,
                    smartSpeed: 700,
                    nav: false,
                    navText:["<i class='fa-left fa-icon'></i>",
                        "<i class='fa-right fa-icon'></i>"],
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        768: {
                            items: 2,
                            nav: true
                        },
                        1023: {
                            items: 4
                        }
                    },
                    dots: false
                });
            }
// Custom Navigation Events


            function destroy_owl1(el) {
                el.data('owlCarousel').destroy();
            }
            $('.btn-leader').click(function(){
                $(".tab-content #leader").addClass('animated slideInRight');
            });
            $('.btn-n-leader').click(function(){
                $(".tab-content #n-leader").addClass('animated slideInRight');
            });
            $('.btn-mil').click(function(){
                $(".tab-content #mil").addClass('animated slideInRight');
            });
            demo.removeClass('off');

        } else if (checkWidth < 767) {
            demo.addClass('off');
        }
    }

    $(document).ready(mobile);
    $(window).resize(mobile);
});

/*jQuery(document).ready(function () {

    function mobile() {
        var checkWidth = $(window).width();
        var owl = $('.owl-carousel');

     if ( checkWidth >=768 ) {

             owlOptions = {
                 rewindSpeed :30,
                 margin: 10,
                 navigation: true,
                 responsiveRefreshRate:50,
                 navigationText:	["<i class='fa-left fa-icon'></i>",
                     "<i class='fa-right fa-icon'></i>"]
             };

         $("#owl3").owlCarousel({
             items:4,
             navigation: true,
             navigationText:	["<i class='fa-left fa-icon'></i>",
                 "<i class='fa-right fa-icon'></i>"]
         });
         var owlActive = owl.owlCarousel(owlOptions);
         $('.btn-leader').click(function(){
             $(".tab-content #leader").addClass('animated slideInRight');
         });
         $('.btn-n-leader').click(function(){
             $(".tab-content #n-leader").addClass('animated slideInRight');
         });
         $('.btn-mil').click(function(){
             $(".tab-content #mil").addClass('animated slideInRight');
         });
         owl.removeClass('off');

     }
     else if(checkWidth <=767) {
         owl.addClass('off');

     }
   }
    $(document).ready(mobile);
    $(window).resize(mobile);
});*/

//скрытие элементов
$('.btn-leader').click(function(){
    $(".walk__wrapper").addClass("opaque");
    $(".tab-content ").css("display", "block");
    $(".tabs-header__logo").css("display", "block");
    $(".home-header__logo").css("display", "none");
});
$('.btn-n-leader').click(function(){
    $(".walk__wrapper").addClass("opaque");
    $(".tab-content ").css("display", "block");
    $(".tabs-header__logo").css("display", "block");
    $(".home-header__logo").css("display", "none");
});
$('.btn-mil').click(function(){
    $(".walk__wrapper").addClass("opaque");
    $(".tab-content ").css("display", "block");
    $(".tabs-header__logo").css("display", "block");
    $(".home-header__logo").css("display", "none");
});
$('.tabs-header__logo-title').click(function(){
    $(".home-header__logo").css("display", "block");
    $(".walk__wrapper").removeClass("opaque");
    $(".tabs-header__logo").css("display", "none");
    $(".nav-tabs li").removeClass("opacity_li");
    $(".nav-tabs li").removeClass("active");
    $(".tab-content ").css("display", "none");
    
});
//opasity btn
$(".nav-tabs").on("click", "li", function(){

    $(".nav-tabs li").addClass("opacity_li");
    $(this).removeClass("opacity_li");
});

