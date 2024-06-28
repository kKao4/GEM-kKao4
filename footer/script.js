function init() {
  const scrollToTopButton = document.querySelector(".scroll-to-top");
  scrollToTopButton.addEventListener("click", () => {
    gsap.to(window, { duration: 0.6, scrollTo: 0 });
  });
}

window.addEventListener("DOMContentLoaded", init);
