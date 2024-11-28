// Gestion du menu hamburger
const toggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('animate-fadeIn');
});

// Gestion du mode sombre/clair
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const html = document.documentElement;
    const logo = document.getElementById('logo');

    // Récupération du thème actuel depuis localStorage
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Initialisation du thème
    if (currentTheme === 'dark') {
        html.classList.add('dark');
        themeToggle.classList.add('active');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        logo.src = './img/logo-me-blak.png'; // Change le logo pour le mode sombre
    } else {
        html.classList.remove('dark');
        themeToggle.classList.remove('active');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        logo.src = './img/logo-me.png'; // Change le logo pour le mode clair
    }

    // Gestion du clic sur le bouton de changement de thème
    themeToggle.addEventListener('click', () => {
        const isDarkMode = html.classList.toggle('dark');

        // Met à jour les icônes et l'état du bouton toggle
        themeToggle.classList.toggle('active');
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
            logo.src = './img/logo-dark.png'; // Mettre le chemin du logo sombre
        } else {
            localStorage.setItem('theme', 'light');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
            logo.src = './img/logo-me.png'; // Mettre le chemin du logo clair
        }
    });
});

// Gestion du bouton "Retour en haut"
const scrollToTopButton = document.getElementById('scroll-to-top');

// Fonction pour faire défiler la page vers le haut
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Afficher ou cacher le bouton en fonction du défilement
window.addEventListener('scroll', () => {
    // Vérifie si l'utilisateur a défilé plus de la moitié de la page
    if (window.scrollY > window.innerHeight / 2) {
        // Affiche le bouton en enlevant la classe "hidden"
        scrollToTopButton.classList.remove('hide');
    } else {
        // Cache le bouton en rajoutant la classe "hidden"
        scrollToTopButton.classList.add('hide');
    }
});
