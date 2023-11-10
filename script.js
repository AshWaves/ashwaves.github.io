let typed= new Typed(".text",{
  strings:["Junior Full Stack Developer", "Web Developer","Gym Rat :)"],
  typeSpeed:50,
  backSpeed:100,
  backDelay:1000,
  loop:true
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

