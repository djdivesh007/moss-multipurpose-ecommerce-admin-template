$(function () {
  $(".navigation li").on('mouseenter', function () {
    const mainWrapper = $(".main-wrapper");

    if ((lg || xl) && mainWrapper.hasClass("mini")) {
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
});
function checkSpaceAvaibility(currentPos, that) {
  /* check if there is available space at bottom and top*/
  // since element would be hidden determine expected height;
  const requiredSpace = $(that).find("ul").find("li").length * 32.5;
  totalHeight = $(window).height();
  const availableBottomPosition = totalHeight - currentPos - 42;
  const availableTopPosition = currentPos;
  let below = above = false;
  if (availableBottomPosition >= requiredSpace) {
    below = true;
  }
  if(availableTopPosition >= requiredSpace) {
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