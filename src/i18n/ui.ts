export const ui = {
    tr: {
      // Load Turkish translations
      ...await import('./tr.json').then(module => module.default),
    },
    en: {
      // Load English translations
      ...await import('./en.json').then(module => module.default),
    },
    de: {
      // Load German translations
      ...await import('./de.json').then(module => module.default),
    },
  };