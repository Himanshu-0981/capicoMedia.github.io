let toggleBtn = document.querySelector('.nav-toggle-btn');
let nav = document.querySelector('.navbar');

let toggleFunc = () => {
    nav.classList.toggle('active');
}
toggleBtn.addEventListener('click',toggleFunc);