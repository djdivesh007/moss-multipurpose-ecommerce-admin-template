$(function() {
    const mainWrapper = $(".main-wrapper");
   
    $(document).on('swiped-right', function() {
        $("#hamburger-btn").trigger("click");
    })
    $(".boxed-layout-btn").on("click", function(e) {
        e.preventDefault();
        $(".right-area .main-content").toggleClass("container container-fluid");
    });
    $(".sidebar-layout-btn").on("click", function(e) {
        e.preventDefault();
        mainWrapper.removeClass("mini").toggleClass("horizontal");
    });


    $(".card [fullscreen]").on("click", function(e) {
        e.preventDefault();
        $(this).parents(".card").toggleClass("fullscreen");
    });

    $(".card [close]").on("click", function(e) {
        e.preventDefault();
        $(this).parents(".card").remove();
    });

    $(".card [reload]").on("click", function(e) {
        e.preventDefault();
        const card = $(this).parents(".card").get(),
            nanobar = new progressBar({
                classname: 'loading-bar',
                target: card[0],
                autoProgress: true
            });
        nanobar.go(30);
        //Simulate Loading
        if (typeof $(this).attr("simulate") !== 'undefined' && $(this).attr("simulate") !== false)
            setTimeout(nanobar.done, 5000);
    });
    //To prevent toggleing of already open Panel
    $('.card [data-toggle]').on('click', function(e) {
        $(this).parents(".card").find("button").removeClass("active");
        $(this).addClass("active");
        if ($($(this).data("target")).hasClass("show")) {
            e.stopPropagation();
        }
    });
    if (!screenfull.isEnabled) {
        $("#fullscreen-btn").parent("li").remove();
    }

    screenfull.on('change', function() {
        if (!screenfull.isFullscreen) {
            $("#fullscreen-btn").find('span').html('fullscreen');
        } else {
            $("#fullscreen-btn").find('span').html('fullscreen_exit');
        }
    });
    $("#fullscreen-btn").on('click', function(e) {
        e.preventDefault();

        if (screenfull.isEnabled) {
            screenfull.toggle();
        }
    });

    $('#searchBtn, #closeSearchBtn').on('click',function(e){
        $('#search-bar').toggleClass('open');
        if( $('#search-bar').hasClass('open')) {
            setTimeout(() => {
                $("#search-bar").find("input").trigger('focus');
            })
        }
    });

    $("#search-bar").find("input").on('keyup', function (e){
        e.stopPropagation();
        // https://github.com/jquery/jquery/issues/4755#issuecomment-664501730
        if (e.which === 27)  { // ESC key
            $('#search-bar').removeClass('open');
        }
    });

    $("#search-bar").find(".backdrop").on('click',function(){
        $('#search-bar').removeClass('open');
    });

    $('.modal').on('shown.bs.modal', function() {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover()
    });

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover()
});