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
/*Télécharger plusieurs fichiers */

var links_bdd = [
    '../resources/create_transmusicales.sql',
    '../resources/Diagramme de classe UML.pdf'
];

var links_capgemini = [
    '../resources/Diaporama_Capgemini.pdf',
    '../resources/Dossier_etude_Capgemini.pdf'
];

var links_name_bdd = [
    'create_transmusicales.sql',
    'Diagramme de classe UML.pdf'
];

var links_name_capgemini = [
    'Diaporama_Capgemini.pdf',
    'Dossier_etude_Capgemini.pdf'
];
  
function downloadAll(urls, names) {
    var link = document.createElement('a');
    link.style.display = 'none';

    document.body.appendChild(link);

    for (var i = 0; i < urls.length; i++) {
        link.setAttribute('download', names[i]);
        link.setAttribute('href', urls[i]);
        link.click();
    }

    document.body.removeChild(link);
}

/**************************************************************************/
/*Reload la page à chaque fois qu'on resize la page*/



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
      end: "+=300 center"
    },
    opacity: 0,
    stagger: 0.5,
    clearProps:"all",
    x: -15
});

gsap.from(".projets", {
    scrollTrigger: {
      trigger: ".projets",
      scrub: true,
      start: "top-=15% center",
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
    if (h1.id == "toph1"){
        gsap.from(h1, {
            opacity: 0,
            x: -10,
            ease: "none"
        });
    } else{
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
    }
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
            start: "top-=10% center",
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
i = 0;
gsap.utils.toArray(".sur-moi-content").forEach(article => {
    gsap.from(article, {
        scrollTrigger: {
            trigger: article,
            scrub: true,
            start: "bottom center",
            end: "bottom+=50% center"
          },
          opacity: 1,
    });
    if ((i > 0) && (i % 2 == 1)){
        gsap.from(article, {
            scrollTrigger: {
              trigger: article,
              scrub: true,
              start: "top-=50% center",
              end: "center-=50% center"
            },
            opacity: 0,
            x: "-50%",
            y: 0
        });
    } else if ((i > 0) && (i % 2 == 0)) {
        gsap.from(article, {
            scrollTrigger: {
              trigger: article,
              scrub: true,
              start: "top-=50% center",
              end: "center-=50% center"
            },
            opacity: 0,
            x: "50%",
            y: 0
        });
    } else{
        gsap.from(article, {
            opacity: 0,
            x: "50%",
            y: 0
        });
    }

    
    i++;
});
