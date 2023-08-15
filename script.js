const loader = document.getElementById("preloader");
const navbar = document.getElementsByClassName("navbar")[0];
const video = document.getElementById("VFX__video");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

var lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      navbar.classList.add("hidden");
    } else if (st < lastScrollTop) {
      navbar.classList.remove("hidden");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);

let tl = gsap.timeline({ defaults: { duration: 0.5, opacity: 0 } });
tl.from(".hero__header", { y: "100%", ease: Power1.easeOut }, 1)
  .from(".hero__text", { y: "-100%", ease: Power1.easeOut }, "<.5")
  .from(".hero__btn", { ease: Power1.easeOut }, "<.5");
