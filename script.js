gsap.from(".hero__header", {
  y: '100%',
  opacity: 0,
  duration: 1,
  delay: 1,
  ease: Power2.easeOut
})

gsap.from(".hero__text", {
  y: '-100%',
  opacity: 0,
  duration: 1,
  delay: 2,
  ease: Power2.easeOut
})

gsap.from(".hero__btn", {
  opacity: 0,
  duration: 1,
  delay: 3,
  ease: Power2.easeOut
});
