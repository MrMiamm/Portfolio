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