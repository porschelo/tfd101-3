gsap.registerPlugin(ScrollTrigger);

gsap.to(".m1", {
  x: "30%",
  scrollTrigger: {
    trigger: ".m1",
    start: "-10% center",
    end: "top 50px",
    scrub: true,
    // markers: true,
    id: "scrub",
  },
});
gsap.to(".m2", {
  x: "-40%",
  scrollTrigger: {
    trigger: ".m1",
    start: "top center",
    end: "300px 50px",
    scrub: true,
    // markers: true,
    id: "scrub",
  },
});
gsap.to(".m3", {
  x: "35%",
  scrollTrigger: {
    trigger: ".m1",
    start: "18% center",
    end: "35% 50px",
    scrub: true,
    // markers: true,
    id: "scrub",
  },
});

gsap.to(".m4", {
  x: "-35%",
  scrollTrigger: {
    trigger: ".m1",
    start: "30% center",
    end: "60% 50px",
    scrub: true,
    // markers: true,
    id: "scrub",
  },
});

gsap.to(".m5", {
  x: "35%",
  scrollTrigger: {
    trigger: ".m5",
    start: "27% center",
    end: "43% 50px",
    scrub: true,
    // markers: true,
    id: "scrub",
  },
});

gsap.to(".m6", {
  x: "32%",
  scrollTrigger: {
    trigger: ".m6",
    start: "28% center",
    end: "60% 50px",
    scrub: true,
    // markers: true,
    id: "scrub",
  },
});

gsap.to(".m7", {
  x: "-35%",
  scrollTrigger: {
    trigger: ".m7",
    start: "45% center",
    end: "66% 150px",
    scrub: true,
    // markers: true,
    id: "scrub",
  },
});

//cloud2

gsap.to(".m8", {
  x: "30%",
  scrollTrigger: {
    trigger: ".m8",
    start: "-10% center",
    end: "top 50px",
    scrub: true,
    // markers: true,
    id: "scrub",
  },
});
gsap.to(".m9", {
  x: "-35%",
  scrollTrigger: {
    trigger: ".m8",
    start: "top center",
    end: "300px 50px",
    scrub: true,
    // markers: true,
    id: "scrub",
  },
});
gsap.to(".m10", {
  x: "-40%",
  scrollTrigger: {
    trigger: ".m9",
    start: "18% center",
    end: "35% 50px",
    scrub: true,
    // markers: true,
    id: "scrub",
  },
});

gsap.to(".m11", {
  x: "35%",
  scrollTrigger: {
    trigger: ".m10",
    start: "20% center",
    end: "50% 50px",
    scrub: true,
    // markers: true,
    id: "scrub",
  },
});

gsap.to(".m12", {
  x: "35%",
  scrollTrigger: {
    trigger: ".m12",
    start: "27% center",
    end: "43% 50px",
    scrub: true,
    // markers: true,
    id: "scrub",
  },
});

gsap.to(".m13", {
  x: "32%",
  scrollTrigger: {
    trigger: ".m13",
    start: "28% center",
    end: "60% 50px",
    scrub: true,
    // markers: true,
    id: "scrub",
  },
});

gsap.to(".m14", {
  x: "-35%",
  scrollTrigger: {
    trigger: ".m14",
    start: "45% center",
    end: "66% 150px",
    scrub: true,
    // markers: true,
    id: "scrub",
  },
});

//加很多個物件 可用 TimelineMax
// var controller = new ScrollMagic.Controller();

// var c1 = new TimelineMax();
// c1.set(".m1", { x: 0, scale: 0.5, opacity: 0 }).to(".m1", 1, {
//   x: "-33%",
//   scale: 0.8,
//   opacity: 1,
// });
// new ScrollMagic.Scene({
//   triggerElement: ".trigger01", // 觸發點位址
//   offset: -200, // 場景觸發點調整位址
//   triggerHook: 0.5, // 瀏覽器觸發點
//   reverse: true, //動畫返回 預設：true
//   duration: "500px", //scroll 距離
// })
//   .setTween(c1)
//   .addIndicators()
//   .addTo(controller);

// c2;
// var c2 = new TimelineMax();
// c2.set(".m2", { x: 0, opacity: 0 }).to(".m2", 1, {
//   x: -600,
//   opacity: 1,
// });
// new ScrollMagic.Scene({
//   triggerElement: ".trigger01", // 觸發點位址
//   offset: 50, // 場景觸發點調整位址
//   triggerHook: 0.5, // 瀏覽器觸發點
//   reverse: true, //動畫返回 預設：true
//   duration: "500px", //scroll 距離
// })
//   .setTween(c2)
//   .addIndicators()
//   .addTo(controller);
// --------------------------------
//swiper

let crs = document.getElementsByClassName("crs");
if (crs) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,

    loop: true,

    navigation: {
      nextEl: ".index_nextbtn",
      prevEl: ".index_prbtn",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
}

// --------------------------------
//Back to Top
