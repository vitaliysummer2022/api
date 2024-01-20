showContent(0);
changeContent();

function showContent(index) {
    const content = [showGetContent(), showAddContent()];
    document.querySelector('#content').innerHTML = content[index];
    copyClipboard();
}

function changeContent() {
    document.querySelectorAll('.sidebar-list li').forEach((el, index) => {
        el.onclick = () => {
            showContent(index);
            document.querySelector('#content').scrollTo(0,0);
            document.querySelector('.sidebar-active').classList.remove('sidebar-active');
            el.classList.add('sidebar-active');
        }
    });
}

function copyClipboard() {
    const alert = document.querySelector('.alert');
    document.querySelector('.method b').onclick = e => {
        navigator.clipboard.writeText(e.target.textContent);
        alert.style.animation = 'showAlert 2s forwards';
        setTimeout(() => alert.style.animation = 'none', 2000);
    }
}