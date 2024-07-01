function init() {
  // animation
  const item = document.querySelector(".section-mang-den-dich-vu").querySelector(".item-1");
  console.log(parseFloat(item.offsetHeight) * 3);
  let mm = gsap.matchMedia();
  mm.add("(min-width: 769px)", () => {
    gsap.from(".fadeInUp-banner", {
      autoAlpha: 0,
      y: "2rem",
      duration: 0.8,
      scrollTrigger: {
        start: "bottom bottom",
        toggleActions: "play pause play none",
        trigger: ".fadeInUp-banner",
      },
    });
    gsap.from(".fadeInUp-section-2", {
      autoAlpha: 0,
      y: "2rem",
      duration: 0.8,
      scrollTrigger: {
        start: "bottom-=60% bottom",
        toggleActions: "play pause play none",
        trigger: ".fadeInUp-section-2",
      },
    });
    gsap.from(".slideIn-item", {
      yPercent: 102,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        start: "top bottom",
        toggleActions: "play play play none",
        trigger: ".slideIn-item",
        end: `+=${parseFloat(item.offsetHeight) * 2}`,
      },
    });
    gsap.from(".item-moi-truong-ly-tuong", {
      autoAlpha: 0,
      y: "4rem",
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        start: "bottom-=60% bottom",
        toggleActions: "play pause play none",
        trigger: ".item-moi-truong-ly-tuong",
      },
    });
    gsap.from(".fadeInUp-left-col", {
      autoAlpha: 0,
      y: "4rem",
      duration: 0.8,
      scrollTrigger: {
        start: "bottom-=60% bottom",
        toggleActions: "play pause play none",
        trigger: ".fadeInUp-left-col",
      },
    });
    gsap.from(".fadeInUp-right-col", {
      autoAlpha: 0,
      y: "4rem",
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        start: "bottom-=60% bottom",
        toggleActions: "play pause play none",
        trigger: ".fadeInUp-right-col",
      },
    });
    gsap.from(".fadeInUp-heading-section-tham-gia-doi-ngu", {
      autoAlpha: 0,
      y: "2rem",
      duration: 0.8,
      scrollTrigger: {
        start: "bottom bottom",
        toggleActions: "play pause play none",
        trigger: ".fadeInUp-heading-section-tham-gia-doi-ngu",
      },
    });
    gsap.from(".fadeInUp-bg-section-tham-gia-doi-ngu", {
      autoAlpha: 0,
      y: "4rem",
      duration: 0.8,
      scrollTrigger: {
        start: "bottom-=60% bottom",
        toggleActions: "play pause play none",
        trigger: ".fadeInUp-bg-section-tham-gia-doi-ngu",
        markers: true
      },
    });
    gsap.from(".fadeInUp-content-section-tham-gia-doi-ngu", {
      autoAlpha: 0,
      x: "4rem",
      duration: 0.8,
      scrollTrigger: {
        start: "bottom-=60% bottom",
        toggleActions: "play pause play none",
        trigger: ".fadeInUp-content-section-tham-gia-doi-ngu",
        markers: true
      },
    });
    gsap.from(".fadeInUp-heading-section-ket-noi-voi-chung-toi", {
      autoAlpha: 0,
      y: "2rem",
      duration: 0.8,
      scrollTrigger: {
        start: "bottom bottom",
        toggleActions: "play pause play none",
        trigger: ".fadeInUp-heading-section-ket-noi-voi-chung-toi",
        markers: true
      },
    });
    gsap.from(".fadeInUp-content-section-ket-noi-voi-chung-toi", {
      autoAlpha: 0,
      y: "2rem",
      duration: 0.8,
      scrollTrigger: {
        start: "bottom bottom",
        toggleActions: "play pause play none",
        trigger: ".fadeInUp-content-section-ket-noi-voi-chung-toi",
        markers: true
      },
    });
  });

  // SECTION: section 1
  const swiperBannerContents = document
    .querySelector(".swiper-banner-contents")
    .querySelectorAll(".swiper-banner-content");

  const swiperBanner = new kKao4PaginationSwapSwiper(
    ".swiper-banner",
    {
      slidesPerViewAndGroup: 1,
      activeStyle: {
        opacity: 1,
        boxShadow:
          window.innerWidth > 768
            ? "rgba(255, 255, 255, 0.35) 0px 0px 0px 0.5rem"
            : "rgba(255, 255, 255, 0.35) 0px 0px 0px 0.25rem",
        outline: window.innerWidth > 768 ? "0.065rem solid #fff" : "none",
      },
      normalStyle: { opacity: 0.5, boxShadow: "none", outline: "none" },
    },
    {
      speed: 800,
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    }
  );

  swiperBanner.on("realIndexChange", () => {
    const index = swiperBanner.realIndex;
    swiperBannerContents.forEach((item, i) => {
      item.style.opacity = i === index ? 1 : 0;
    });
  });

  // SECTION: section 3
  const swiperMoiTruongLyTuong = new Swiper(".swiper-moi-truong-ly-tuong", {
    speed: 800,
    initialSlide: 1,
    slidesPerView: 1.3,
    spaceBetween: (window.innerWidth / 100) * 4.267 * 0.94,
    centeredSlides: true,
    navigation: {
      prevEl: ".swiper-moi-truong-ly-tuong-prev-btn",
      nextEl: ".swiper-moi-truong-ly-tuong-next-btn",
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
  });

  // SECTION: section 4
  const accordion = document.querySelectorAll(".accordion");
  const accordionTriggers = document.querySelectorAll(".accordion-trigger");
  accordionTriggers.forEach((accordionTrigger, i) => {
    accordionTrigger.addEventListener("click", () => {
      accordion[i].classList.toggle("accordion-open");
      const accordionContent = accordion[i].querySelector(".accordion-content");
      const isOpen = accordion[i].classList.contains("accordion-open");
      const dotActiveContainer = accordion[i].querySelector(".dot-active-container");
      const dotActive = dotActiveContainer.querySelector(".dot-active");
      accordionContent.style.maxHeight = isOpen ? accordionContent.scrollHeight + "px" : null;
      dotActiveContainer.style.width = isOpen
        ? `${
            parseFloat(window.getComputedStyle(dotActive).width) +
            parseFloat(window.getComputedStyle(dotActive).marginRight)
          }px`
        : 0;
      dotActiveContainer.style.opacity = isOpen ? 1 : 0;
    });
  });
}

window.addEventListener("DOMContentLoaded", init);
