const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
     if (!menuOpen) {
         menuBtn.classList.add('open');
         menuOpen = true;
         if (navList.style.display === "block") {
            navList.style.display = "none"; }
            else {
                navList.style.display = "block";}
     }
     else {
         menuBtn.classList.remove('open');
         menuOpen = false;
         if (navList.style.display === "block") {
            navList.style.display = "none"; }
     }
});