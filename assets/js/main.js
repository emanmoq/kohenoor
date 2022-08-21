jQuery(function ($) {
    $('.clientsOpinionSlider').owlCarousel({
        rtl: true, autoplay: false,
        loop: false,
        nav: true,
        dots: false,
        items: 1,
        navText: ['<i class="fa-solid fa-chevron-right"></i>','<i class="fa-solid fa-chevron-left"></i>']
    });
    $("#slider").slider({
        isRTL:true,
        range: true,
        min: 0,
        max: 500,
        step: 10,
        values: [15, 55],
        slide: function(event, ui) {
            var delay = function() {
                var handleIndex = $(ui.handle).index();
        var label = handleIndex == 1 ? '#min' : '#max';
                $(label).html("ر.س" + ui.value).position({
                    my: 'top right',
                    at: 'top right',
                    of: ui.handle,
                    offset: "-40, -40"
                });
            };
            
            // wait for the ui.handle to set its position
            setTimeout(delay, 5);
        }
    });
    
    $('#min').html("ر.س" + $('#slider').slider('values', 0)).position({
        my: 'top right',
        at: 'top right',
        of: $('#slider span:eq(0)'),
        offset: "-40, -40"
    });
    
    $('#max').html("ر.س" + $('#slider').slider('values', 1)).position({
        my: 'top right',
        at: 'top right',
        of: $('#slider span:eq(1)'),
        offset: "-40, -40"
    });
  
});

