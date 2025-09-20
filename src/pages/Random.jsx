import { useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import BookCard from "../components/BookCard";
import BookModal from "../modal/BookModal";
import { getBooksByCategory, getBookDetails, getBookRating } from "../api/Api";
import { cardGrid, display, flexDirection, gap, mainContainer, selfAlign, text, textAlign } from "../styling/global-style";

export default function Random() {
  // 📌 Categories list

  const categories = [
    "Science Fiction",
    "Romance",
    "Mystery",
    "Fantasy",
    "History",
    "Biography",
    "Horror",
    "Self-Help",
    "Philosophy",
    "Adventure"
  ];

  const [current, setCurrent] = useState(null);
  const [books, setBooks] = useState([]);
  const [modalBook, setModalBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooks = async (category) => {
    setLoading(true);
    setError(null);
    setBooks([]);
    try {
      const booksRaw = await getBooksByCategory(category, 20);
      if (!booksRaw.length) throw new Error("No books found in this category");
      const detailed = [];
      for (let i = 0; i < booksRaw.length; i++) {
        let full = { ...booksRaw[i] };
        try {
          const details = await getBookDetails(full.key);
          full = { ...full, ...details };
        } catch {}
        try {
          if (i > 0) await new Promise(res => setTimeout(res, 500));
          const rating = await getBookRating(full.key);
          full = { ...full, rating };
        } catch {}
        detailed.push(full);
      }
      setBooks(detailed);
    } catch (err) {
      setError(err.message || "Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  // 🎲 Pick random category and book
  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    const cat = categories[randomIndex];
    setCurrent(cat);
    fetchBooks(cat);
  };

  return (
    <Box sx={[mainContainer, display("flex"), flexDirection("column"), gap(2)]}>
      <Typography sx={[text(42), textAlign("center")]}>Random Book Discovery</Typography>
      <Typography sx={[text(16), textAlign("center")]}>Discover new books with our surprise selection</Typography>

      <Button sx={[selfAlign("center")]} variant="contained" onClick={handleRandom}>SURPRISE ME!</Button>
      {loading && <CircularProgress sx={{ mt: 2 }} />}
      {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
      {books.length > 0 && !loading && !error && (
        <Box sx={{ ...cardGrid, mt: 2 }}>
          {books.map((book, i) => (
            <Box key={book.key || i} sx={{ cursor: "pointer" }} onClick={() => setModalBook(book)}>
              <BookCard
                image={`https://covers.openlibrary.org/b/id/${book.covers?.[0] || book.cover_id || book.cover_i}-L.jpg`}
                title={book.title}
                author={Array.isArray(book.author_name) ? book.author_name.join(", ") : book.author_name || ""}
                publishDate={book.first_publish_year || ""}
                rating={book.rating || "-"}
              />
            </Box>
          ))}
        </Box>
      )}
      <BookModal open={!!modalBook} onClose={() => setModalBook(null)} book={modalBook} />
    </Box>
  );
}
