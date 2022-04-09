export default function closeCookies() {
    const acceptCookies = document.querySelector('.accept-cookies');
    const cookies = document.querySelector('.cookies');

    acceptCookies.addEventListener('click', () => {
        cookies.classList.remove('is-visible');
    });
}