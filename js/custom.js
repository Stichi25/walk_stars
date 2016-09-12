

jQuery(document).ready(function () {

    function mobile() {
        var checkWidth = $(window).width();
        var owl = $('.owl-carousel');

     if ( checkWidth >=768 ) {

             owlOptions = {
                 loop: true,
                 margin: 10,
                 responsiveClass: true,
                 navigation: true,
                 mouseDrag:false,
                 touchDrag:false,
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
});

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

