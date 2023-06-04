/**************************************************************************/
/*Changer le menu du header lorsqu'on scroll*/

window.addEventListener("scroll", () => {
    var header = document.querySelector('header');
    
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else{
        header.classList.remove("scrolled");
    }
});

/**************************************************************************/
/*Fermer le menu burger lorsqu'on appuie un bouton du menu*/

var elements = document.getElementsByTagName("a"); 
for(var i=0; i<elements.length; i++){
    if (elements[i].className == 'pagelink') { 
        elements[i].onclick = function(){ 
            document.querySelector('input').checked = false;
        }
    } 
}

/**************************************************************************/
/*Fermer le menu burger lorsqu'on appuie un bouton du menu*/

var links = [
    '../resources/create_transmusicales.sql',
    '../resources/Diagramme de classe UML.pdf'
];

var links_name = [
    'create_transmusicales.sql',
    'Diagramme de classe UML.pdf'
];
  
function downloadAll(urls) {
    var link = document.createElement('a');
    link.style.display = 'none';

    document.body.appendChild(link);

    for (var i = 0; i < urls.length; i++) {
        link.setAttribute('download', links_name[i]);
        link.setAttribute('href', urls[i]);
        link.click();
    }

    document.body.removeChild(link);
}

/**************************************************************************/
/*Reload la page à chaque fois qu'on resize la page*/

window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});

/**************************************************************************/
/*Animations*/

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 0.8
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
      trigger: ".projets",
      scrub: true,
      start: "top center",
      end: "+=400 center"
    },
    opacity: 0,
    rotation: 1,
    x: -15
});

gsap.from(".projets", {
    scrollTrigger: {
      trigger: ".projets",
      scrub: true,
      start: "top center",
      end: "top+=15% center"
    },
    opacity: 0
});

gsap.to("#accueil", {
    "--angle": "75deg",
    "--col1": "10%",
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: "none"
});

/*Home buttons animation*/
gsap.from("#accueil_content > nav > ul", {
    y: 20,
    opacity: 0
});

gsap.to("#accueil_content > nav > ul", {
    y: 0,
    opacity: 1,
    stagger: 0.6,
    duration: 1,
    ease: "none"
});

gsap.utils.toArray("h1").forEach(h1 => {
    gsap.from(h1, {
        scrollTrigger: {
            trigger: h1,
            scrub: true,
            start: "top center",
            end: "+=200 center"
          },
        opacity: 0,
        x: -10,
        ease: "none"
    });
});
gsap.utils.toArray(".competences article, .formations article").forEach(article => {
    gsap.from(article, {
        scrollTrigger: {
            trigger: article.parentNode,
            scrub: true,
            start: "top center",
            end: "+=50 center"
          },
        boxShadow: "none",
        ease: "none"
    });
    
    gsap.from(article, {
        scrollTrigger: {
            trigger: article.parentNode,
            scrub: true,
            start: "top+=10% center",
            end: "top+=15% center"
          },
        opacity: 0,
        ease: "none"
    });
});

gsap.to("#accueil > img, #accueil > div", {
    scrollTrigger: {
        trigger: ".competences",
        scrub: true,
        start: "-100 center",
        end: "+=300 center"
      },
    y: -500,
    ease: "none"
});

gsap.to("#accueil > .wave_accueil", {
    scrollTrigger: {
        trigger: ".competences",
        scrub: true,
        start: "-100 center",
        end: "+=300 center"
      },
    y: 50,
    ease: "none"
});

gsap.from("#the_project > h1", {
    x: -10,
    opacity: 0,
    ease: "none"
});

gsap.to("#the_project > h1", {
    x: 0,
    opacity: 1,
    duration: 0.5,
    ease: "none"
});

gsap.timeline()
.from(".content", {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    ease: "none"
}).from(".content > div", {
    opacity: 0,
    duration: 1.5,
    ease: "none"
});

gsap.from(".details > div:nth-child(1)", {
    scrollTrigger: {
        trigger: ".details",
        scrub: true,
        start: "-300 center",
        end: "top center"
      },
    x: -100,
    opacity: 0,
    ease: "none"
});
gsap.from(".details > div:nth-child(2)", {
    scrollTrigger: {
        trigger: ".details",
        scrub: true,
        start: "-300 center",
        end: "top center"
      },
    x: 100,
    opacity: 0,
    ease: "none"
});
