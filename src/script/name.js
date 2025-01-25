const titleInput = document.getElementById('nameInput');

titleInput.addEventListener('input', () => {
    const nameElements = document.querySelectorAll('.name');
    nameElements.forEach(element => {
        element.textContent = titleInput.value || 'Meno';
    });
});