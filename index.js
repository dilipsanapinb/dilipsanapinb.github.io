let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('#nav-menu');
 
 
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}


// Download Resume BUttons1

let btn=document.getElementById("resume-link-1")
btn.addEventListener('click',()=>{
    window.open("Dilip_Sanap_Resume.pdf","_blank")
})
// let btn=document.getElementById("resume-button-1")

let btn2=document.getElementById("resume-link-2")
btn2.addEventListener('click',()=>{
    window.open("Dilip_Sanap_Resume.pdf","_blank")
})