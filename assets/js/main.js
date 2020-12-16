$(function() {
    const mainWrapper = $(".main-wrapper");
    $("#hamburger-btn").on("click", function() {
        if (xs || sm || md) {
            mainWrapper.toggleClass("sidemenu-open");
            $(".overlay-mask").toggleClass("open");
        } else {
            if (mainWrapper.hasClass("horizontal"))
                mainWrapper.toggleClass("without-icon");
            else {
                mainWrapper.toggleClass("mini");
            }
        }
    });
    $(".overlay-mask").on("click", function() {
        $("#hamburger-btn").trigger("click");
    });
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

    $('#searchBtn').on('click',function(e){
        $('#search-bar').toggleClass('d-none big-search');
        $('#closeSearchBtn').removeClass('d-none');
        $('.search-bar').toggleClass('d-none');
    });

    $("#search-bar").on('blur',function(){
        $('#search-bar').toggleClass('d-none big-search');
        $('.search-bar').toggleClass('d-none');
    });

    $('#closeSearchBtn').on('click',function(){
        $('#search-bar').toggleClass('d-none big-search');
        $('#closeSearchBtn').addClass('d-none');
        $('.search-bar').toggleClass('d-none');
    });

});