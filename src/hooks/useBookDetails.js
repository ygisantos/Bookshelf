import { useState, useEffect, useCallback } from "react";
import { getBookDetails, getBookRating } from "../api/Api";

export const useBookDetails = (initialBooks = []) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDetailsAndRatings = useCallback(async (booksToFetch) => {
    setLoading(true);
    setError(null);

    try {
      const detailed = [];
      for (let i = 0; i < booksToFetch.length; i++) {
        const book = booksToFetch[i];
        let enriched = { ...book };
        if (book.key) {
          try {
            const details = await getBookDetails(book.key);
            enriched = { ...enriched, ...details };
          } catch { }
        }
        enriched.rating = getBookRating(book.key);
        detailed.push(enriched);
        setBooks((prev) => detailed);
        await new Promise((res) => setTimeout(res, 250));
      }
    } catch (err) {
      setError(err.message || "Failed to fetch book details");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialBooks.length > 0) fetchDetailsAndRatings(initialBooks);
  }, [initialBooks, fetchDetailsAndRatings]);

  return { books, loading, error, setBooks, fetchDetailsAndRatings };
};