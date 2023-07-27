const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.all-links');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})