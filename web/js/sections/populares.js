define(['jquery',
        'jquery/ui',
        'slick'
], function ($) {

    let materialsSlider = $('.populares > .pagebuilder-column-group');
    if (materialsSlider.length) {

        materialsSlider.slick({
            slidesToScroll: 5,
            swipeToSlide: false,
            slidesToShow: 6,
            infinite: false,
            arrows: true,
            draggable: false
        });

    }

});