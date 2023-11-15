const translations = {
    'en': {
        'pageTitle': 'Game Download Page',
        'homeTab': 'Home',
        'modsTab': 'Mods',
        'fixTab': 'Fix Errors and Bugs',
        'settingsTab': 'Settings',
        'gameTitle': 'GTA San Andreas',
        'downloadButton': 'Download',
        'darkModeLabel': 'Dark Mode:',
        'languageLabel': 'Select Language:',
        // Add more translations as needed
    },
    'es': {
        'pageTitle': 'Página de descarga de juegos',
        'homeTab': 'Inicio',
        'modsTab': 'Mods',
        'fixTab': 'Corregir Errores y Bugs',
        'settingsTab': 'Configuración',
        'gameTitle': 'GTA San Andreas',
        'downloadButton': 'Descargar',
        'darkModeLabel': 'Modo Oscuro:',
        'languageLabel': 'Seleccionar Idioma:',
        // Add more translations as needed
    },
    // Add more languages as needed
};

function changeLanguage() {
    const languageSelect = document.getElementById('language-select');
    const selectedLanguage = languageSelect.value;

    updateContent(selectedLanguage);
}

function updateContent(language) {
    const elementsToUpdate = document.querySelectorAll('[data-lang]');

    elementsToUpdate.forEach(element => {
        const translationKey = element.dataset.lang;
        if (translations[language] && translations[language][translationKey]) {
            element.textContent = translations[language][translationKey];
        }
    });
}

function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    const selectedTab = document.getElementById(tabName);
    selectedTab.style.display = 'block';
}

function showTable(card) {
    const table = card.querySelector('.game-table');
    table.style.display = 'table';
}

function hideTable(card) {
    const table = card.querySelector('.game-table');
    table.style.display = 'none';
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Initial content update based on the default language
updateContent('en');
