export default function activeSwitchButton() {
    const switchButtons = document.querySelectorAll(
        ".accordion .switch-button .switch input"
    );
    const textsSwitchButtons = document.querySelectorAll(
        ".accordion .switch-button > span"
    );

    switchButtons.forEach((switchButton, i) => {
        switchButton.addEventListener('change', () => {
            if (switchButton.checked) {
                textsSwitchButtons[i].innerText = "Sempre ativado";
            } else {
                textsSwitchButtons[i].innerText = "Desativado";
            }
        });
    });
}
