import { getCollection } from 'astro:content';

// Get products by language
export async function getProductsByLanguage(lang: string) {
  return await getCollection('products', (entry) => {
    return entry.slug.startsWith(`${lang}/`);
  });
}

// Get products by category and language
export async function getProductsByCategory(lang: string, category: string) {
  return await getCollection('products', (entry) => {
    return entry.slug.startsWith(`${lang}/`) && entry.data.category === category;
  });
}

// Get featured products by language
export async function getFeaturedProducts(lang: string, limit?: number) {
  const products = await getCollection('products', (entry) => {
    return entry.slug.startsWith(`${lang}/`) && entry.data.featured === true;
  });
  
  return limit ? products.slice(0, limit) : products;
}

// Get related products (same category, different product)
export async function getRelatedProducts(lang: string, category: string, currentSlug: string, limit: number = 3) {
  const products = await getCollection('products', (entry) => {
    return entry.slug.startsWith(`${lang}/`) && 
           entry.data.category === category &&
           entry.slug !== currentSlug;
  });
  
  return products.slice(0, limit);
}

// Get unique product categories by language
export async function getCategories(lang: string) {
  const products = await getProductsByLanguage(lang);
  const categories = [...new Set(products.map(product => product.data.category))];
  return categories;
}