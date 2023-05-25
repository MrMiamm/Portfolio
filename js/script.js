window.addEventListener("scroll", () => {
    var header = document.querySelector('header');
    
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else{
        header.classList.remove("scrolled");
    }
});

var elements = document.getElementsByTagName("a"); 
for(var i=0; i<elements.length; i++){
    if (elements[i].className == 'pagelink') { 
        elements[i].onclick = function(){ 
            document.querySelector('input').checked = false;
        }
    } 
}

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 0.8
});

lenis.on('scroll', (e) => {
    console.log("caca");
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.from("#contact > div", {
    scrollTrigger: {
      trigger: "#contact",
      scrub: true,
      start: "top-500 bottom",
      end: "bottom bottom",
    },
    opacity: 0,
    y: 150,
    ease: "none"
});

gsap.from(".projet", {
    scrollTrigger: {
      trigger: ".projet",
      scrub: true,
      start: "top center",
      end: "bottom bottom"
    },
    opacity: 0,
    x: -15
});

gsap.to("#contact > div, .projet", {
    opacity: 1,
    x: 0,
    stagger: 0.8
});

gsap.to("#accueil", {
    "--angle": "75deg",
    "--col1": "10%",
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: "none"
});
