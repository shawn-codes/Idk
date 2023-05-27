//Adding dark mode functionality 

function myFunction() {
    var element = document.body; 
    element.classList.toggle("dark mode"); 

    //scroll to top thingy
    const toTop = () => window.scrollTo({top:0, behavior: 'smooth'});
}