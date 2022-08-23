jQuery(function ($) {
    $('.clientsOpinionSlider').owlCarousel({
        rtl: true, autoplay: false,
        loop: false,
        nav: true,
        dots: false,
        items: 1,
        margin:0,
        navText: ['<i class="fa-solid fa-chevron-right"></i>','<i class="fa-solid fa-chevron-left"></i>']
    });
    $("#slider").slider({
        isRTL:true,
        range: true,
        min: 0,
        max: 500,
        step: 10,
        values: [15, 400],
        slide: function(event, ui) {
            var delay = function() {
                var handleIndex = $(ui.handle).index();
        var label = handleIndex == 1 ? '#min' : '#max';
                $(label).html("ر.س" + ui.value).position({
                    my: 'top right',
                    at: 'top right',
                    of: ui.handle,
                    offset: "50, -40"
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
        my: 'top left',
        at: 'top right',
        of: $('#slider span:eq(1)'),
        offset: "-40, -40"
    });

    $('.moreOptions').select2({
        dir: "rtl",
    })

    //plugin bootstrap minus and plus
        $('.btn-number').click(function (e) {
            e.preventDefault();
            var fieldName = $(this).attr('data-field');
            var type = $(this).attr('data-type');
            var input = $(this).parent().find("input[name='" + fieldName + "']");
            var currentVal = parseInt(input.val());
            if (!isNaN(currentVal)) {
                if (type == 'minus') {
                    var minValue = parseInt(input.attr('min'));
                    if (!minValue) minValue = 1;
                    if (currentVal > minValue) {
                        input.val(currentVal - 1).change();
                    }
                    if (parseInt(input.val()) == minValue) {
                        $(this).attr('disabled', true);
                    }

                } else if (type == 'plus') {
                    var maxValue = parseInt(input.attr('max'));
                    if (!maxValue) maxValue = 999;
                    if (currentVal < maxValue) {
                        input.val(currentVal + 1).change();
                    }
                    if (parseInt(input.val()) == maxValue) {
                        $(this).attr('disabled', true);
                    }

                }
            } else {
                input.val(0);
            }
        });
        $('.input-number').focusin(function () {
            $(this).data('oldValue', $(this).val());
        });
        $('.input-number').change(function () {

            var minValue = parseInt($(this).attr('min'));
            var maxValue = parseInt($(this).attr('max'));
            if (!minValue) minValue = 1;
            if (!maxValue) maxValue = 999;
            var valueCurrent = parseInt($(this).val());
            var name = $(this).attr('name');
            if (valueCurrent >= minValue) {
                $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
            } else {
                alert('Sorry, the minimum value was reached');
                $(this).val($(this).data('oldValue'));
            }
            if (valueCurrent <= maxValue) {
                $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
            } else {
                alert('Sorry, the maximum value was reached');
                $(this).val($(this).data('oldValue'));
            }
        });
        $(".input-number").keydown(function (e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== - 1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
        $(".selectClose").click(function () {
            $(this).parent().hide()
        }) 
});

