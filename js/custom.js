//Owl Slider ini-tabes

    var window_size = $(window).width();
    if(window_size <= 767) {

    }
    else {

        $(document).ready(function () {

            initialize_owl($('#owl1'));
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
                initialize_owl($('#owl3'));

            }).on('hide.bs.tab', function () {
                destroy_owl($('#owl3'));

            });


        });

//Owl general
        function initialize_owl(el) {
            el.owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                navigation: true,
                responsiveRefreshRate:50,
                navigationText:	["<i class='fa-left fa-icon'></i>",
                    "<i class='fa-right fa-icon'></i>"],

            });
            $("#owl3").owlCarousel({
                items:4,
                navigation: true,
                navigationText:	["<i class='fa-left fa-icon'></i>",
                    "<i class='fa-right fa-icon'></i>"]
            });

        }

        function destroy_owl(el) {
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

    }





//скрытие элементов
$('.btn-leader').click(function(){
    $(".walk__wrapper").addClass("opaque");
    $(".tab-content #leader").css("display", "block");

    $(".tabs-header__logo").css("display", "block");
    $(".tab-content #n-leader").css("display", "none");
    $(".tab-content #mil").css("display", "none");
    $(".home-header__logo").css("display", "none");
});
$('.btn-n-leader').click(function(){
    $(".walk__wrapper").addClass("opaque");
    $(".tab-content #n-leader").css("display", "block");



    $(".tabs-header__logo").css("display", "block");
    $(".tab-content #leader").css("display", "none");
    $(".tab-content #mil").css("display", "none");
    $(".home-header__logo").css("display", "none");
});
$('.btn-mil').click(function(){
    $(".walk__wrapper").addClass("opaque");
    $(".tab-content #mil").css("display", "block");

    $(".tabs-header__logo").css("display", "block");

    $(".tab-content #leader").css("display", "none");
    $(".tab-content #n-leader").css("display", "none");
    $(".home-header__logo").css("display", "none");
});
$('.tabs-header__logo-title').click(function(){
    $(".home-header__logo").css("display", "block");
    $(".walk__wrapper").removeClass("opaque");
    $(".tab-content #mil").css("display", "none");
    $(".tabs-header__logo").css("display", "none");
    $(".tab-content #leader").css("display", "none");
    $(".tab-content #n-leader").css("display", "none");
    $(".nav-tabs li").removeClass("opacity_li");
    $(".nav-tabs li").removeClass("active");
    
});
//opasity btn
$(".nav-tabs").on("click", "li", function(){

    $(".nav-tabs li").addClass("opacity_li");
    $(this).removeClass("opacity_li");
});