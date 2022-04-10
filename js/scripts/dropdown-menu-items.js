export default function dropdownMenuItems() {
    const menuItems = document.querySelectorAll('.menu__item');
    const submenus = document.querySelectorAll('.submenu');

    menuItems.forEach((menuItem, i) => {        
        menuItem.addEventListener('click', () => {
            menuItem.classList.toggle('is-active');
            submenus[i].classList.toggle('is-active');
        });
    })
}