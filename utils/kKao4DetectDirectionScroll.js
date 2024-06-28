function kKao4DetectDirectionScroll(element = "root", fncUp, fncDown) {
  let lastScrollTop = element === "root" ? window.scrollY || document.documentElement.scrollTop : element.scrollTop;
  function detectDirection() {
    const scrollTopPosition =
      element === "root" ? window.scrollY || document.documentElement.scrollTop : element.scrollTop;
    if (scrollTopPosition < lastScrollTop) {
      fncUp();
    } else if (scrollTopPosition > lastScrollTop) {
      fncDown();
    }
    lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  }
  (element === "root" ? window : element).addEventListener("scroll", detectDirection);
}
