jQuery(function () {
    var filter_container = jQuery('#menuFilter');
    filter_container.children().css('position','relative');	
        filter_container.masonry({
            singleMode: true,
            itemSelector: '.menuFilterItem:not(.hide)',
            animate: true,
            animationOptions: { duration: 800, queue: false }
        });
        jQuery(window).resize(function () {
             temp_width = filter_container.children().filter(':first')();
            filter_container.masonry({
                columnWidth: temp_width,
                singleMode: true,
                itemSelector: '.menuFilterItem:not(.hide)',
                animate: true,
                animationOptions: { duration: 800, queue: false }
            });
        });
        jQuery('ul#menuTabs a').click( function (e) {

            jQuery(this).addClass("active");
            jQuery(this).parents("li").siblings().children("a").removeClass("active");
            e.preventDefault();

           var  select_filter = jQuery(this).attr('data-value');

            if (select_filter == "All" || jQuery(this).parent().index() == 0) {
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

