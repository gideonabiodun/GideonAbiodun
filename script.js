// Auto types function

var typed = new Typed(".auto-input", {
    strings: ["Gideon <br> Abiodun", "Web <br> Developer", "Web <br> Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
}) 

// Animated bubble execution

const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("aside");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 10;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    }, 3000);
}) 


let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbxUPMRJg4cgYNaPxGCBhMYySkEQrtnToaUdGHsmpRmtEUHDLJ9T0_tGsZiFw4kRUQ-ubA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
    setTimeout(function(){
        msg.innerHTML = ""
    },5000)
    form.reset()

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!"
      })
      .catch(error => console.error('Error!', error.message))
  })
