function init() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

  ScrollSmoother.create({
    smooth: 0.8,
    effects: true,
    smoothTouch: 0.1,
  });
}

window.addEventListener("DOMContentLoaded", init);
