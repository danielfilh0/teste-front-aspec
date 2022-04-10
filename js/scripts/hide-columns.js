export default function hideColumns() {
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