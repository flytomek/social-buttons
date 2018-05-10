if (localStorage.showSocial == 'no') {
    document.getElementById('social').style.display = "none";
}

document.getElementById('close-button').addEventListener('click', () => {
    document.getElementById('social').classList.add('social-container-close');
    localStorage.showSocial = 'no';
});