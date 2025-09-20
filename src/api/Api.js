import api from "./axios";

export async function searchBooks(query, limit = 20) {
  try {
    const response = await api.get(`search.json?q=${encodeURIComponent(query)}&limit=${limit}`);
    return Array.isArray(response.data?.docs) ? response.data.docs : [];
  } catch (error) {
    throw new Error(error.message || "Failed to fetch search results");
  }
}

export async function getDaily() {
  try {
    const response = await api.get("trending/daily.json?limit=12");
    return response.data;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch trending");
  }
}

export async function getBookDetails(workKey) {
  try {
    const cleanKey = workKey.replace("/works/", "");
    const response = await api.get(`works/${cleanKey}.json`);
    return response.data;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch book details");
  }
}


// AKALA KO PO NEED PA MAG FETCHING NG DATA PARA SA RATING : (
// Inoptimize ko pa po yung pag fetch para hindi mag too many request (stagerring pero niremove ko na po)
export function getBookRating(workKey) {
  try {
    return (Math.random() * 5).toFixed(1);
  } catch (error) {
    return "0.0";
  }
}

// export async function getBookRating(workKey) {
//   try {
//     const cleanKey = workKey.replace("/works/", "");
//     const response = await api.get(`works/${cleanKey}/ratings.json`);
//     const avg = response.data?.summary?.average || 0;
//     return parseFloat(avg).toFixed(1);
//   } catch (error) {
//     return 0;
//   }
// }

export async function getBooksByCategory(category, limit = 20) {
  try {
    const q = `subject:${encodeURIComponent(category.toLowerCase())}`;
    const response = await api.get(`search.json?q=${q}&sort=trending&limit=${limit}`);
    if (Array.isArray(response.data?.docs) && response.data.docs.length) return response.data.docs;
    const fallback = await api.get(`subjects/${encodeURIComponent(category.toLowerCase())}.json?limit=${limit}`);
    return Array.isArray(fallback.data?.works) ? fallback.data.works : [];
  } catch (error) {
    throw new Error(error.message || "Failed to fetch books by category");
  }
}