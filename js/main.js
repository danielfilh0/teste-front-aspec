function dropdownMenuItems() {
    const menuItems = document.querySelectorAll('.menu__item');
    const submenus = document.querySelectorAll('.submenu');

    menuItems.forEach((menuItem, i) => {        
        menuItem.addEventListener('click', () => {
            menuItem.classList.toggle('is-active');
            submenus[i].classList.toggle('is-active');
        });
    })
}

function activeMenuMobile() {
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu__open');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu--mobile');
    });
}

dropdownMenuItems();

activeMenuMobile();