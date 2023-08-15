const loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})


let tl = gsap.timeline({ defaults: {duration: .5, opacity: 0}});
tl.from(".hero__header", { y: '100%', ease: Power1.easeOut }, 1)
  .from(".hero__text", { y: '-100%', ease: Power1.easeOut }, '<.5')
  .from(".hero__btn", { ease: Power1.easeOut}, '<.5')
