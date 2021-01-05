'use strict';
$(function() {
    $(document).on('click', '.card .toggle-fullscreen', function(e) {
        e.preventDefault();
        $(this).parents('.card').toggleClass('fullscreen');
    });

    $(document).on('click', '.card .close', function(e) {
        e.preventDefault();
        $(this).parents('.card').remove();
    });

    $(document).on('click', '.card .reload', function(e) {
        e.preventDefault();
        const card = $(this).parents('.card').get();
        const nanobar = new progressBar({
            classname: 'loading-bar',
            target: card[0],
            autoProgress: true,
        });
        nanobar.go(30);
        // Simulate Loading
       
        if ($(this).hasClass('simulate')) {
            console.log('simulate');
            setTimeout(nanobar.done, 5000);
        }
    });
    // To prevent toggleing of already open Panel
    $(document).on('click', '.card [data-toggle]', function(e) {
        $(this).parents('.card').find('button').removeClass('active');
        $(this).addClass('active');
        if ($($(this).data('target')).hasClass('show')) {
            e.stopPropagation();
        }
    });
    if (!screenfull.isEnabled) {
        $('#fullscreen-btn').parent('li').remove();
    }

    screenfull.on('change', function() {
        if (!screenfull.isFullscreen) {
            $('#fullscreen-btn').find('span').html('fullscreen');
        } else {
            $('#fullscreen-btn').find('span').html('fullscreen_exit');
        }
    });
    $(document).on('click', '#fullscreen-btn', function(e) {
        e.preventDefault();

        if (screenfull.isEnabled) {
            screenfull.toggle();
        }
    });

    $(document).on('click', '#searchBtn, #closeSearchBtn', function() {
        $('#search-bar').toggleClass('open');
        if ( $('#search-bar').hasClass('open')) {
            setTimeout(() => {
                $('#search-bar').find('input').trigger('focus');
            });
        }
    });

    $(document).on('keyup', '#search-bar input', function(e) {
        e.stopPropagation();
        // https://github.com/jquery/jquery/issues/4755#issuecomment-664501730
        if (e.which === 27) { // ESC key
            $('#search-bar').removeClass('open');
        }
    });

    $(document).on('click', '#search-bar .backdrop', function() {
        $('#search-bar').removeClass('open');
    });

    $(document).on('shown.bs.modal', '.modal', function() {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
    });

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
});
