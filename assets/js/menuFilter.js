jQuery(function ($) {

    var filter_container = $('#menuFilter');

    filter_container.children().css('position', 'relative');
    filter_container.masonry({
        singleMode: true,
        isRTL: true,
        
        itemSelector: '.menuFilterItem:not(.hide)',
        animate: true,
        animationOptions: { duration: 800, queue: false }
    });
    $(window).resize(function () {
        var temp_width = filter_container.children().filter(':first')();
        filter_container.masonry({
            isRTL: true,
            columnWidth: temp_width,
            singleMode: true,
            itemSelector: '.menuFilterItem:not(.hide)',
            animate: true,
            animationOptions: { duration: 800, queue: false }
        });
    });
    $('ul#menuTabs a').on('click', function (e) {

        $(this).addClass("active");
        $(this).parents("li").siblings().children("a").removeClass("active");
        e.preventDefault();

        var select_filter = $(this).attr('data-value');

        if (select_filter == "All" || $(this).parent().index() == 0) {
            filter_container.children().each(function () {
                if ($(this).hasClass('hide')) {
                    $(this).removeClass('hide');
                    $(this).fadeIn();
                }
            });
        } else {
            filter_container.children().not('.' + select_filter).each(function () {
                if (!$(this).hasClass('hide')) {
                    $(this).addClass('hide');
                    $(this).fadeOut();
                }
            });
            filter_container.children('.' + select_filter).each(function () {
                if ($(this).hasClass('hide')) {
                    $(this).removeClass('hide');
                    $(this).fadeIn();
                }
            });
        }

        filter_container.masonry();

    });


});

