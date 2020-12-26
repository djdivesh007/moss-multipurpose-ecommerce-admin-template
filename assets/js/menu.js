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
    } else {
      const currentPos = this.getBoundingClientRect().left;
      $(this).find("ul").css("left", currentPos);
    }
  }).on('mouseleave', function () {
    $(this).find("ul").removeClass("reversed").css("marginTop", "").css("height", "");
    $(this).find("ul").css("top", "");
    $(this).find("ul").css("left", "");
  });

  $(".navigation-arrow").on("click", function() {
    const ul = $(".navigation").find("ul").first().get(0);
    if ($(this).hasClass("right")) {
      newPos = ul.scrollLeft + 150;
    } else {
      newPos = ul.scrollLeft - 150;
    }
    ul.scrollTo({left: newPos, behavior: 'smooth' });
  });

  $("#hamburger-btn").on("click", function () {
    mainWrapper.toggleClass("collapsed");
    if (mainWrapper.hasClass("overlay-menu")) {
      if(mainWrapper.hasClass("collapsed")) {
        $(".overlay-mask").removeClass("open");
      } else {
        $(".overlay-mask").addClass("open");
      }
    }
  });
  $(".overlay-mask").on('click', function () {
    $("#hamburger-btn").trigger('click');
    $(".overlay-mask").removeClass("open");
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