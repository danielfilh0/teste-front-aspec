export default function activeModal() {
    const modal = document.querySelector('.modal');
    const openModal = document.querySelectorAll('[data-open-modal="modal"]');
    const closeModal = document.querySelectorAll('[data-close-modal="modal"]');

    openModal.forEach((item) => {
        item.addEventListener('click', () => {
            modal.classList.add('is-active');
        });
    });

    closeModal.forEach((item) => {
        item.addEventListener('click', () => {
            modal.classList.remove('is-active');
        });
    });
}