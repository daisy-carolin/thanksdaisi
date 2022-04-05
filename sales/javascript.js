const toggleBtn = document.querySelector(".nav__togglebtn");
const list = document.querySelector(".nav__list");
const navItem = document.querySelectorAll(".nav__item");
toggleBtn.addEventListener("click", () =>{
    list.classList.toggle ("active");
});
navItem.forEach(navMenu => {
    navMenu.addEventListener("click", () => list.classList.toggle("active"))
})

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }