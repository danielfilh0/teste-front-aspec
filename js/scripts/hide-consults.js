export default function hideConsults() {
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