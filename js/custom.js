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
//Owl Slider v4
jQuery("#owl3").owlCarousel({
    items:4,
    itemsDesktop : [1000,3],
    itemsTablet : [600,2],
    itemsMobile : [479,1]
});
function initialize_owl(el) {
    el.owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    });
}

function destroy_owl(el) {
    el.data('owlCarousel').destroy();
}