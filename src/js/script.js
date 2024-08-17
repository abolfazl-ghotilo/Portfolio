let $ = document
let humbermenu = $.getElementById("humbermenu")
let navbar = $.getElementById("navbar")
let close = $.getElementById("close")

humbermenu.addEventListener("click" , function(){
    navbar.classList.remove("hidden")
})
close.addEventListener("click" , function(){
    navbar.classList.add("hidden");
})
