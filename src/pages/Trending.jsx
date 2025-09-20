import BookCard from "../components/BookCard";
import { useEffect, useState } from "react";
import { getDaily, getBookRating, getBookDetails } from "../api/Api";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { cardGrid, sectionTitle } from "../styling/global-style";

const CATEGORIES = [
  { key: "fiction", label: "Popular Fiction", terms: ["fiction", "novel", "short stories"] },
  { key: "science", label: "Popular Science & Technology", terms: ["science", "technology", "mathematics"] },
  { key: "history", label: "Popular History", terms: ["history", "historical"] },
  { key: "fantasy", label: "Popular Fantasy", terms: ["fantasy", "magic", "mythology"] },
  { key: "biography", label: "Popular Biography", terms: ["biography", "memoir", "autobiography"] },
];

export default function Trending() {
  const [allBooks, setAllBooks] = useState([]);
  const [categoryBooks, setCategoryBooks] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    getDaily().then(async (data) => {
      if (!isMounted) return;
      const works = Array.isArray(data?.works) ? data.works : [];

      // Fetch details for each work (description, subjects, covers, etc.)
      const detailedWorks = await Promise.all(
        works.slice(0, 30).map(async (book) => {
          try {
            const details = await getBookDetails(book.key);
            return { ...book, ...details }; // merge fields
          } catch {
            return book;
          }
        })
      );

      // Trending (first 12)
      setAllBooks(detailedWorks.slice(0, 12));

      // Build categories from subjects
      const byCategory = {};
      CATEGORIES.forEach((cat) => {
        byCategory[cat.key] = detailedWorks
          .filter(
            (b) =>
              Array.isArray(b.subjects) &&
              b.subjects.some((s) =>
                cat.terms.some((term) =>
                  s.toLowerCase().includes(term.toLowerCase())
                )
              )
          )
          .slice(0, 6);
      });
      setCategoryBooks(byCategory);

      setLoading(false);

      // Fetch ratings
      const fetchRatings = async (books) => {
        for (let i = 0; i < books.length; i++) {
          const book = books[i];
          if (!book.key) continue;
          try {
            const rating = await getBookRating(book.key);
            if (isMounted) {
              setAllBooks((prev) =>
                prev.map((b) =>
                  b.key === book.key ? { ...b, rating } : b
                )
              );
              setCategoryBooks((prev) => {
                const updated = { ...prev };
                Object.keys(updated).forEach((catKey) => {
                  updated[catKey] = updated[catKey].map((b) =>
                    b.key === book.key ? { ...b, rating } : b
                  );
                });
                return updated;
              });
            }
          } catch {}
          await new Promise((res) => setTimeout(res, 500));
        }
      };
      fetchRatings(detailedWorks);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", px: 2, py: 4 }}>
      <Typography sx={sectionTitle}>Trending Books Today</Typography>
      <Box sx={cardGrid}>
        {allBooks.map((book, i) => (
          <BookCard
            key={book.key || i}
            image={`https://covers.openlibrary.org/b/id/${
              book.covers?.[0] || book.cover_id || book.cover_i
            }-L.jpg`}
            title={book.title}
            author={
              Array.isArray(book.author_name)
                ? book.author_name.join(", ")
                : book.author_name || ""
            }
            publishDate={book.first_publish_year || ""}
            trendingCount={i + 1}
            rating={book.rating || "Loading..."}
          />
        ))}
      </Box>

      {CATEGORIES.map((cat) => (
        <Box key={cat.key} sx={{ mt: 4 }}>
          <Typography sx={sectionTitle}>{cat.label}</Typography>
          <Box sx={cardGrid}>
            {(categoryBooks[cat.key] || []).length > 0 ? (
              categoryBooks[cat.key].map((book, i) => (
                <BookCard
                  key={book.key || i}
                  image={`https://covers.openlibrary.org/b/id/${
                    book.covers?.[0] || book.cover_id || book.cover_i
                  }-L.jpg`}
                  title={book.title}
                  author={
                    Array.isArray(book.author_name)
                      ? book.author_name.join(", ")
                      : book.author_name || ""
                  }
                  publishDate={book.first_publish_year || ""}
                  rating={book.rating || "Loading..."}
                />
              ))
            ) : (
              <Typography>No trending books found.</Typography>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
