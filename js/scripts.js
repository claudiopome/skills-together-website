window.addEventListener("load", function() {
    
    const menu =  document.getElementById("mobile-menu");
    const openMenu = document.getElementById("open-menu");
    const closeMenu = document.getElementById("close-menu");
    
    openMenu.addEventListener("click", function(e) {
        e.preventDefault();
        menu.classList.remove("opacity-0", "w-0", "h-0", "p-0");
        menu.classList.add("fixed", "opacity-100", "top-0", "right-0", "bottom-0", "left-0", "w-screen", "h-screen", "p-8");
    });

    closeMenu.addEventListener("click", function(e) {
        e.preventDefault();
        menu.classList.remove("fixed", "opacity-100", "top-0", "right-0", "bottom-0", "left-0", "w-screen", "h-screen", "p-8" );
        menu.classList.add("opacity-0", "w-0", "h-0", "p-0");
    });


});