const btnDoiMau = document.getElementById('btn-doi-mau');
const bodyElement = document.body;

if (btnDoiMau) {
    btnDoiMau.addEventListener('click', () => {
        bodyElement.classList.toggle('light-mode');
        
        if (bodyElement.classList.contains('light-mode')) {
            btnDoiMau.textContent = '☀️';
        } else {
            btnDoiMau.textContent = '🌙';
        }
    });
}