import api from "./axios";

export async function getDaily(category) {
  try {
    const response = await api.get(`daily?category=${category}&limit=6`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getBookDetails(id) {
  try {
    const response = await api.get(`books/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

