//gsap

// var controller = new ScrollMagic.Controller();

// var m1 = TweenMax.fromTo(
//   ".m1",
//   1,
//   { x: -800, scale: 0.5 },
//   { x: 130, scale: 1 }
// );
// new ScrollMagic.Scene({
//   triggerElement: ".trigger01", // 觸發點位址

// })
//   .setTween(m1)
//   .addIndicators()
//   .addTo(controller);

//加很多個物件 可用 TimelineMax
var controller = new ScrollMagic.Controller();

var c1 = new TimelineMax();
c1.set(".m1", { x: 0, scale: 0.5, opacity: 0 }).to(".m1", 1, {
  x: 500,
  scale: 0.8,
  opacity: 1,
});
new ScrollMagic.Scene({
  triggerElement: ".trigger01", // 觸發點位址
  offset: -200, // 場景觸發點調整位址
  triggerHook: 0.5, // 瀏覽器觸發點
  reverse: true, //動畫返回 預設：true
  duration: "500px", //scroll 距離
})
  .setTween(c1)
  .addIndicators()
  .addTo(controller);

c2;
var c2 = new TimelineMax();
c2.set(".m2", { x: 0, opacity: 0 }).to(".m2", 1, {
  x: -600,
  opacity: 1,
});
new ScrollMagic.Scene({
  triggerElement: ".trigger01", // 觸發點位址
  offset: 50, // 場景觸發點調整位址
  triggerHook: 0.5, // 瀏覽器觸發點
  reverse: true, //動畫返回 預設：true
  duration: "500px", //scroll 距離
})
  .setTween(c2)
  .addIndicators()
  .addTo(controller);
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
