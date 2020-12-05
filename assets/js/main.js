$(function () {
  const mainWrapper = $(".main-wrapper");
  $(".hamburger").on("click", function () {
    if (xs || sm || md) {
      mainWrapper.toggleClass("sidemenu-open");
    }
    else {
      if (mainWrapper.hasClass("horizontal"))
        mainWrapper.toggleClass("without-icon");
      else {
        mainWrapper.toggleClass("mini");
      }
    }
  });

  $(".boxed-layout-btn").on("click", function (e) {
    e.preventDefault();
    $(".right-area .main-content").toggleClass("container container-fluid");
  });
  $(".sidebar-layout-btn").on("click", function (e) {
    e.preventDefault();
    mainWrapper.removeClass("mini").toggleClass("horizontal");
  });


  $(".card [fullscreen]").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".card").toggleClass("fullscreen");
  });

  $(".card [close]").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".card").remove();
  });

  $(".card [reload]").on("click", function (e) {
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
  $('.card [data-toggle]').on('click', function (e) {
    $(this).parents(".card").find("button").removeClass("active");
    $(this).addClass("active");
    if ($($(this).data("target")).hasClass("show")) {
      e.stopPropagation();
    }
  });

});