/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#1a202c',
          secondary: '#4a5568',
          accent: '#2b6cb0',
        },
      },
    },
    plugins: [],
  };