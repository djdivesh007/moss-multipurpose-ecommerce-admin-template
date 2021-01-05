$(function (){
    'use strict';
    let openMenu = null;
    window.showContextMenu = function (x, y, contextMenu) {
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
    };

    function hideContextMenu(popperMenu) {
        $(popperMenu.popper).removeClass('show');
        popperMenu.reference.remove();
    };
    
    $(document).on('click', function () {
        try {
            if (openMenu) {
                this.hideContextMenu(openMenu);
                openMenu = null;
            }
        } catch (e) {
            // Something might have gone wrong. Let click event bubble
        }
    });
});

