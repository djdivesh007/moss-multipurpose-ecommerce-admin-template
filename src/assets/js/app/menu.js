'use strict';

$(function () {
    const mainWrapper = $('.main-wrapper');
    const isRTL = $('html').hasClass('rtl');

    $(document).on('mouseenter', '.navigation li', function () {
        if (mainWrapper.hasClass('mini')) {
            const currentPos = this.getBoundingClientRect().top;
            $(this).find('a').first().css('top', currentPos);
            $(this).find('ul').css('top', currentPos);
            const isSpaceAvailable = checkSpaceAvaibility(currentPos, this);
            if (!isSpaceAvailable.below) {
                if (isSpaceAvailable.above) {
                    // Show submenu on top
                    $(this).find('ul').addClass('reversed').css('marginTop', -isSpaceAvailable.requiredSpace + 'px');
                } else {
                    // Show scroll
                    $(this).find('ul').css('height', isSpaceAvailable.availableBottomPosition + 'px');
                }
            }
        } else {
            const currentPos = this.getBoundingClientRect().left;
            if (!isRTL) $(this).find('ul').css('left', currentPos);
        }
    }).on('mouseleave', '.navigation li', function () {
        $(this).find('ul').removeClass('reversed').css('marginTop', '').css('height', '');
        $(this).find('ul').css('top', '');
        $(this).find('ul').css('left', '');
    });

    $(document).on('click', '.navigation-arrow', function() {
        const ul = $('.navigation').find('ul').first().get(0);
        let newPos;
        if ($(this).hasClass('right')) {
            newPos = ul.scrollLeft + 150;
        } else {
            newPos = ul.scrollLeft - 150;
        }
        ul.scrollTo({left: newPos, behavior: 'smooth' });
    });

    $(document).on('click', '#hamburger-btn', function () {
        mainWrapper.toggleClass('collapsed');
        if (mainWrapper.hasClass('overlay-menu')) {
            if (mainWrapper.hasClass('collapsed')) {
                $('.overlay-mask').removeClass('open');
            } else {
                $('.overlay-mask').addClass('open');
            }
        }
    });
    $(document).on('click', '.overlay-mask', function () {
        $('#hamburger-btn').trigger('click');
        $('.overlay-mask').removeClass('open');
    });
});

function checkSpaceAvaibility(currentPos, that) {
    /* check if there is available space at bottom and top*/
    // since element would be hidden determine expected height;
    const requiredSpace = $(that).find('ul').find('li').length * 31;
    const totalHeight = $(window).height();
    const availableBottomPosition = totalHeight - currentPos - 40;
    const availableTopPosition = currentPos;
    let below = false,
        above = false;
    if (availableBottomPosition >= requiredSpace) {
        below = true;
    }
    if (availableTopPosition >= requiredSpace) {
        above = true;
    }
    return {
        below, above, availableBottomPosition, availableTopPosition, requiredSpace
    };
}