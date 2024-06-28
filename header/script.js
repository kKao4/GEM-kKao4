function init() {
  const header = document.querySelector("header");
  const desktopHeader = document.querySelector(".desktop-header");
  const modalMenuTrigger = document.querySelector(".modal-menu-trigger");
  const modalMenu = document.querySelector(".modal-menu");
  const modalMenuOverlay = document.querySelector(".modal-menu-overlay");

  if (window.innerWidth > 768) {
    const sectionButtons = header.querySelector(".btn-container").querySelectorAll("button");
    sectionButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        gsap.to(window, { duration: 0.6, scrollTo: `#${btn.getAttribute("data-id")}` });
      });
    });
  } else {
    const sectionButtons = modalMenu.querySelector(".btn-container").querySelectorAll("button");
    const sectionsMobile = document.querySelectorAll(".section-mobile");
    window.addEventListener("scroll", () => {
      let topArray = [];
      sectionsMobile.forEach((section) => {
        topArray.push(Math.abs(section.getBoundingClientRect().top.toFixed(2)));
      });
      let minTop = topArray[0];
      for (let i = 1; i < topArray.length; i++) {
        if (minTop > topArray[i]) {
          minTop = topArray[i];
        }
      }
      const activeSectionIndex = topArray.indexOf(minTop);
      sectionButtons.forEach((btn, i) => {
        const dotActive = btn.querySelector(".dot-active");
        if (i === activeSectionIndex + 1) {
          dotActive.style.opacity = 1;
        } else {
          dotActive.style.opacity = 0;
        }
      });
    });
    sectionButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalMenuTrigger.classList.remove("modal-menu-trigger-open");
        modalMenu.classList.remove("modal-menu-open");
        modalMenuOverlay.classList.remove("modal-menu-overlay-open");
        document.body.style.overflow = modalMenuOverlay.classList.contains("modal-menu-overlay-open")
          ? "hidden"
          : "auto";
        const sectionId = btn.getAttribute("data-id");
        if (sectionId) {
          gsap.to(window, { duration: 0.6, scrollTo: `#${sectionId}` });
        } else {
          gsap.to(window, { duration: 0.6, scrollTo: 0 });
        }
      });
    });
  }

  gsap.fromTo(
    document.querySelector(".find-out-more-container").querySelector(".arrow-icon"),
    {
      yPercent: -20,
    },
    { yPercent: 20, duration: 0.8, ease: "power1.inOut", repeat: -1, yoyo: true }
  );

  kKao4DetectDirectionScroll(
    "root",
    () => {
      desktopHeader.style.transform = "none";
    },
    () => {
      desktopHeader.style.transform = "translate(0, -100%)";
    }
  );

  modalMenuTrigger.addEventListener("click", () => {
    modalMenuTrigger.classList.toggle("modal-menu-trigger-open");
    modalMenu.classList.toggle("modal-menu-open");
    modalMenuOverlay.classList.toggle("modal-menu-overlay-open");
    document.body.style.overflow = modalMenuOverlay.classList.contains("modal-menu-overlay-open") ? "hidden" : "auto";
  });

  window.addEventListener("click", (e) => {
    if (modalMenuOverlay.contains(e.target) && modalMenuOverlay.classList.contains("modal-menu-overlay-open")) {
      modalMenuTrigger.classList.remove("modal-menu-trigger-open");
      modalMenu.classList.remove("modal-menu-open");
      modalMenuOverlay.classList.remove("modal-menu-overlay-open");
      document.body.style.overflow = modalMenuOverlay.classList.contains("modal-menu-overlay-open") ? "hidden" : "auto";
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
