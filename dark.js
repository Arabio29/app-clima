function toggleTheme() {
    const body = document.querySelector('body');
    const navbar = document.querySelector('.navbar');
    const themeButton = document.getElementById('theme-button');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
        themeButton.textContent = 'Modo Oscuro';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
        themeButton.textContent = 'Modo Claro';
    }
}