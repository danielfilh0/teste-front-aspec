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

function hideConsults() {
    const container = document.querySelector('.dashboard__consults');
    const button = document.querySelector('.dashboard__consults legend');
    const textButton = document.querySelector('.dashboard__consults legend button span');
    const content = document.querySelector('.dashboard__consults .content');

    button.addEventListener('click', () => {
        content.classList.toggle('is-hide');
        button.classList.toggle('content-is-hide');
        container.classList.toggle("child-is-hidden");

        if (button.classList.contains('content-is-hide')) {
            textButton.innerText = "Exibir consulta";
        } else {
            textButton.innerText = "Ocultar consulta";
        }
    });
}

function hideColumns() {
    const button = document.querySelector('.dashboard__columns header button');
    const textButton = document.querySelector('.dashboard__columns header button span');
    const content = document.querySelector('.dashboard__columns .checkbox-listing');

    button.addEventListener('click', () => {
        content.classList.toggle('is-hide');
        button.classList.toggle('content-is-hide');

        if (button.classList.contains('content-is-hide')) {
            textButton.innerText = "Exibir colunas";
        } else {
            textButton.innerText = "Ocultar colunas";
        }
    });
}

function selectAllCheckboxs() {
    const item = document.getElementById('select-all');
    const checkboxs = document.querySelectorAll('.checkbox-listing input');

    item.addEventListener('click', () => {
        if (item.checked) {
            checkboxs.forEach((checkbox) => {
                checkbox.checked = true;
            });
        } else {
            checkboxs.forEach((checkbox) => {
                checkbox.checked = false;
            });
        }
    });
}

function generateReport() {
    const btnGenerate = document.querySelector('.btn-primary');
    const btnClear = document.querySelector('.btn-secondary');
    const table = document.querySelector('.dashboard__table table');

    btnGenerate.addEventListener('click', (event) => {
        event.preventDefault();
        table.classList.remove('is-hide');
    });

    btnClear.addEventListener('click', (event) => {
        event.preventDefault();
        table.classList.add('is-hide');
    });
}

dropdownMenuItems();

activeMenuMobile();

hideConsults();

hideColumns();

selectAllCheckboxs();

generateReport();