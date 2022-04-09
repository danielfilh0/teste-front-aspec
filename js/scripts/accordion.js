export default function activeAccordion() {
    const accordions = document.querySelectorAll('.accordion');
    const accordionsHeader = document.querySelectorAll('.accordion__header');
    const accordionsContent = document.querySelectorAll('.accordion__content');

    accordions.forEach((accordion, i) => {
        accordionsHeader[i].addEventListener('click', () => {
            accordion.classList.toggle('is-active');
            accordionsContent[i].classList.toggle('is-visible');
        });
    });
}