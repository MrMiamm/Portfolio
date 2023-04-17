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