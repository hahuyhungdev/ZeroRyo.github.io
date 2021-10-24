
var owl = $('.owl-carousel');  
owl.owlCarousel({
    loop:true,
    margin:40,
    nav:[
        $('.btn-right').click(function() {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('next.owl.carousel', [600]);
        }),

        $('.btn-left').click(function() {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [600]);
        }),
    ],
    responsive:{
        0:{
            items:1,
            dots:false
        },
        600:{
            items:3
        },
        1000:{
            items:3,
            dots:false
        }
    }
})