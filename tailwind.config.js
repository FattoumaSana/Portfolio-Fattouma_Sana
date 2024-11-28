/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Mode dark
  content: [
    "./index.html",          //  fichier index.html
    "./src/**/*.{html,js}"    // Couvre tous les fichiers HTML et JS dans le dossier /src et ses sous-dossiers
  ],
  theme: {
    extend: {
      // ajouter des personnalisations si nécessaire
    },
  },
  plugins: [],
}
