let $ = document
let humbermenu = $.getElementById("humbermenu")
let navbar = $.getElementById("navbar")
let close = $.getElementById("close")
let mybutton = $.getElementById("gotop");

const form = $.getElementById("form")
const nameInp = $.getElementById("nameInp")
const emailInp = $.getElementById("emailInp")
const titleInp = $.getElementById("titleInp")
const messageInp = $.getElementById("messageInp")
const sendInfo = $.getElementById("sendInfo")
let regex = /@+.com/

// window.addEventListener("contextmenu" , (e) => {
//   e.preventDefault()
// })

humbermenu.addEventListener("click" , function(){
    navbar.classList.remove("hidden")
})
close.addEventListener("click" , function(){
    navbar.classList.add("hidden");
})
function closeNav(){
  navbar.classList.add("hidden");
}
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

form.addEventListener("submit" , function(ev){
  ev.preventDefault()

  let UserData = {
    nameInp: nameInp.value,
    emailInp: emailInp.value,
    titleInp: titleInp.value,
    messageInp: messageInp.value
}

  fetch('https://portfolio-feedback-29eeb-default-rtdb.firebaseio.com/users.json',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(UserData)
  })
  .then(res => res.json)
  .catch(err => console.error('Error:', err))
  clear()
});
function clear(){
     nameInp.value = ""
     emailInp.value = ""
     titleInp.value = ""
     messageInp.value = ""
}


    AOS.init({
    duration: 800,
    });

        // let btn = document.getElementById("dark")
        // let body = document.getElementById("bod")
        // let darkflag = false

        // function change() {
        //     if (darkflag) {
        //         body.setAttribute("class", "light")
        //         darkflag = false
        //     }
        //     else {
        //         body.setAttribute("class", "dark")
        //         darkflag = true
        //     }
        // }
