$(function (){

    'use strict';
    let openMenu = null;
    function showContextMenu(x, y, contextMenu) {
        const newTempElement = document.createElement('div');
        newTempElement.style.position = 'absolute';
        newTempElement.style.top = y+'px';
        newTempElement.style.left = x+'px';
        document.body.appendChild(newTempElement);
        if (openMenu) hideContextMenu(openMenu);
        openMenu = new Popper(newTempElement, contextMenu, {
            strategy: 'fixed',
            placement: 'bottom-start'
        });
        $(contextMenu).addClass('show');
    }

    function hideContextMenu(popperMenu) {
        $(popperMenu.popper).removeClass('show');
        popperMenu.reference.remove();
    }

    $(document).on('click', function () {
        try {
            if (openMenu) {
                hideContextMenu(openMenu);
                openMenu = null;
            }
        } catch (e) {
            // Something might have gone wrong. Let click event bubble
        }
    });

    $('.has-context-menu').on('contextmenu', function (e) {
        e.preventDefault();
        let contextMenu = $(this).siblings('.dropdown-menu').first().get(0);
        showContextMenu(e.clientX, e.clientY, contextMenu);
    });
    $('.has-context-menu').on('long-press', function (e) {
        let contextMenu = $(this).siblings('.dropdown-menu').first().get(0);
        showContextMenu(e.detail.clientX, e.detail.clientY, contextMenu);
    });
});
