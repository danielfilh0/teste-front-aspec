export default function activeMenuMobile() {
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu__open');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu--mobile');
    });
}
