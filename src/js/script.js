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

let mybutton = document.getElementById("gotop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

    AOS.init({
    duration: 800,
    });

        let btn = document.getElementById("dark")
        let body = document.getElementById("bod")
        let darkflag = false

        function change() {
            if (darkflag) {
                body.setAttribute("class", "light")
                darkflag = false
            }
            else {
                body.setAttribute("class", "dark")
                darkflag = true
            }
        }
