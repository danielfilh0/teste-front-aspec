export default function generateReport() {
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