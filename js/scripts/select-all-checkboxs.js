export default function selectAllCheckboxs() {
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