function kKao4IsInViewport(selector, inFnc, outFnc) {
  let element = selector;
  if (typeof selector === "string") {
    element = document.querySelector(selector);
  }
  window.addEventListener("scroll", () => {
    const rect = element.getBoundingClientRect();
    if (Math.floor(rect.height) >= Math.floor(window.innerHeight)) {
      if (
        Math.floor(rect.top) <= Math.floor(window.innerHeight - window.innerHeight * 1) &&
        Math.floor(rect.bottom) >= Math.floor(window.innerHeight * 1)
      ) {
        inFnc();
      } else {
        outFnc();
      }
    } else if (Math.floor(rect.height) < Math.floor(window.innerHeight)) {
      if (
        window.innerHeight - Math.floor(rect.top) >= Math.floor(rect.height * 1) &&
        Math.floor(rect.bottom) >= Math.floor(rect.height * 1)
      ) {
        inFnc();
      } else {
        outFnc();
      }
    }
  });
}
