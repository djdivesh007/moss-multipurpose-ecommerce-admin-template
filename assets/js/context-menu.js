openMenu = null;
function showContextMenu(x, y, contextMenu) {
    const newTempElement = document.createElement("div");
    newTempElement.style.position = 'fixed';
    newTempElement.style.top = y+'px';
    newTempElement.style.left = x+'px';
    document.body.appendChild(newTempElement);
    openMenu = new Popper(newTempElement, contextMenu, {
        strategy: 'fixed',
        placement: 'bottom-start'
    });
    $(contextMenu).addClass('show');
}

$(document).on('click', function () {
    try {
        if(openMenu) {
            $(openMenu.popper).removeClass('show');
            openMenu.reference.remove();
        }
    } catch (e) {
        // Something might have gone wrong. Let click event bubble
    }
})