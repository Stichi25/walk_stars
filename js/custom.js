$(document).ready(function () {

    initialize_owl($('#owl1'));

    $('a[href="#home"]').on('shown.bs.tab', function () {
        initialize_owl($('#owl1'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#owl1'));
    });

    $('a[href="#profile"]').on('shown.bs.tab', function () {
        initialize_owl($('#owl2'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#owl2'));
    });

    $('a[href="#messages"]').on('shown.bs.tab', function () {
        initialize_owl($('#owl3'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#owl3'));
    });

    $('a[href="#settings"]').on('shown.bs.tab', function () {
        initialize_owl($('#owl4'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#owl4'));
    });
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