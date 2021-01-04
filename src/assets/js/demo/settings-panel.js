$(function() {
    $(document).on('click', '.settings-btn', function() {
        $('.settings-panel').toggleClass('open');
    });

    $(document).on('change', 'input[type=radio][name=menu-switch]', function() {
        switch (this.value) {
        case 'default':
            $('.main-wrapper').removeClass('mini overlay-menu horizontal collapsed');
            break;
        case 'horizontal':
            $('.main-wrapper').removeClass('mini overlay-menu without-icon collapsed').addClass('horizontal');
            break;
        case 'horizontal-no-icon':
            $('.main-wrapper').removeClass('mini overlay-menu without-icon collapsed').addClass('horizontal without-icon');
            break;
        case 'mini':
            $('.main-wrapper').removeClass('horizontal overlay-menu without-icon collapsed').addClass('mini');
            break;
        case 'overlay':
            $('.main-wrapper').removeClass('mini horizontal').addClass('overlay-menu collapsed');
            break;
        }
    });
    $(document).on('change', 'input[type=radio][name=layout-switch]', function() {
        switch (this.value) {
        case 'box':
            $('.right-area .main-content').removeClass('container-fluid').addClass('container');
            break;
        case 'full-width':
            $('.right-area .main-content').removeClass('container').addClass('container-fluid');
            break;
        }
    });
    $(document).on('click', '.color-pellate .btn', function () {
        document.getElementsByTagName('head')[0].getElementsByTagName('link')[0].href = $(this).data('href');
    });
    $(document).on('change', 'input[type=radio][name=direction-switch]', function() {
        switch (this.value) {
        case 'ltr':
            $('html').removeClass('rtl');
            break;
        case 'rtl':
            $('html').addClass('rtl');
            break;
        }
    });
});
