$(function () {
  const mainWrapper = $(".main-wrapper");

  $(".navigation li").on('mouseenter', function () {

    if (mainWrapper.hasClass("mini")) {
      const currentPos = this.getBoundingClientRect().top;
      $(this).find("a").first().css("top", currentPos);
      $(this).find("ul").css("top", currentPos);
      const isSpaceAvailable = checkSpaceAvaibility(currentPos, this);
      if (!isSpaceAvailable.below) {
        if (isSpaceAvailable.above) {
          // Show submenu on top
          $(this).find("ul").addClass("reversed").css("marginTop", -isSpaceAvailable.requiredSpace + "px");
        } else {
          // Show scroll
          $(this).find("ul").css("height", isSpaceAvailable.availableBottomPosition + "px");
        }
      }
    }
  }).on('mouseleave', function () {
    $(this).find("ul").removeClass("reversed").css("marginTop", "").css("height", "");
    $(this).find("ul").css("top", "");
  });

  $("#hamburger-btn").on("click", function () {
    if (mainWrapper.hasClass("horizontal") || (mainWrapper.hasClass("hidden-sidebar") && !mainWrapper.hasClass("mini-off"))) {
      mainWrapper.toggleClass("sidemenu-open");
      $(".overlay-mask").toggleClass("open");
    }
    else {
      mainWrapper.toggleClass("mini");
      mainWrapper.toggleClass("hidden-sidebar mini-off");
    }
  });
  $(".overlay-mask").on("click", function () {
    $("#hamburger-btn").trigger("click");
  });
});

function checkSpaceAvaibility(currentPos, that) {
  /* check if there is available space at bottom and top*/
  // since element would be hidden determine expected height;
  const requiredSpace = $(that).find("ul").find("li").length * 31;
  const totalHeight = $(window).height();
  const availableBottomPosition = totalHeight - currentPos - 40;
  const availableTopPosition = currentPos;
  let below = above = false;
  if (availableBottomPosition >= requiredSpace) {
    below = true;
  }
  if (availableTopPosition >= requiredSpace) {
    above = true;
  }
  a = {
    below, above, availableBottomPosition, availableTopPosition, requiredSpace
  }
  console.log(a);
  return a;
}

function onMenuHover() {
  if (!mainWrapper.hasClass("mini")) {
    return;
  }
}