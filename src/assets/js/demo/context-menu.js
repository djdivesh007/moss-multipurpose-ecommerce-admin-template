$(function (){
    $(document).on('contextmenu', '.has-context-menu', function (e) {
        e.preventDefault();
        let contextMenu = $(this).siblings('.dropdown-menu').first().get(0);
        showContextMenu(e.clientX, e.clientY, contextMenu);
    });
    $(document).on('long-press', '.has-context-menu', function (e) {
        let contextMenu = $(this).siblings('.dropdown-menu').first().get(0);
        showContextMenu(e.detail.clientX, e.detail.clientY, contextMenu);
    });
});
