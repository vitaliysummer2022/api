showContent();

function showContent() {
    document.querySelector('#content').innerHTML = showGetContent();
    copyClipboard();
}

function copyClipboard() {
    const alert = document.querySelector('.alert');
    document.querySelector('.method b').onclick = e => {
        navigator.clipboard.writeText(e.target.textContent);
        alert.style.animation = 'showAlert 2s forwards';
        setTimeout(() => alert.style.animation = 'none', 2000);
    }
}