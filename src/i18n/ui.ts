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

// Define the type for our translation keys
type UI = typeof ui;

// Function to get translations for a specific language
export function useTranslations(lang: keyof UI) {
  return function translate(key: string, params?: Record<string, string>) {
    // Split the key into parts (for nested objects)
    const keys = key.split('.');
    
    // Get the translation object for the specified language
    let translation: any = ui[lang];
    
    // Navigate through the nested translation objects
    for (const k of keys) {
      translation = translation?.[k];
      
      // Return the key if translation not found
      if (translation === undefined) {
        console.warn(`Translation key not found: ${key} in language: ${lang}`);
        return key;
      }
    }
    
    // If the translation is a string and we have params, replace the placeholders
    if (typeof translation === 'string' && params) {
      return Object.entries(params).reduce((acc, [paramKey, paramValue]) => {
        return acc.replace(new RegExp(`{${paramKey}}`, 'g'), paramValue);
      }, translation);
    }
    
    return translation;
  };
}