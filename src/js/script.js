$(() => {
  console.log('script loaded')

  var tl1 = gsap.timeline();
  var tl2 = gsap.timeline();
  var tl3 = gsap.timeline();
  var tl4 = gsap.timeline();
  var tl5 = gsap.timeline();

  tl1.to(".banana1",{
    scale: 2,
    duration: 0.2,
    stagger:0.5,
  })  

  tl2.to(".banana2",{
    rotation: 1800,
    stagger:0.5,
    ease: "power3.out",
    duration: 1,
  })

  tl3.to(".banana3",{
    x:300,
    skewX: 180,
    duration: 1,
//    yoyo
  })

  tl4.to(".banana4",{
    opacity:0.2,
    duration: 2,
    repeat:-1,
    ease: "power1.inOut",
    yoyo: true,
  })

  tl5.set(".banana5",{rotation:15})
  tl5.to(".banana5", 1, {
    rotation: 60,
    repeat: -1,
    ease: "power1.inOut",
    yoyo: true,
  })
})
