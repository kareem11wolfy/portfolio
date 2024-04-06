let toggle = document.querySelector('.toggle');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('.bx-menu');
let menumood = "none"

function show() {
     if (menuIcon.classList.contains("bx-menu")) {
     navbar.style.display = "block"
     menuIcon.classList.replace("bx-menu", "bx-x")
     }else{
        navbar.style.display = "none"
        menuIcon.classList.replace("bx-x", "bx-menu")
     }
} 


