import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import BookModal from "../modal/BookModal";
import { getBooksByCategory } from "../api/Api";
import { display, flexDirection, gap, mainContainer, selfAlign, text, textAlign } from "../styling/global-style";
import BookList from "../components/shared/BookList";
import BookSkeleton from "../components/shared/BookSkeleton";
import { useBookDetails } from "../hooks/useBookDetails";

export default function Random() {

  const categories = [
    "Science Fiction", "Romance", "Mystery", "Fantasy", "History",
    "Biography", "Horror", "Self-Help","Philosophy","Adventure"
  ];

  const [currentCategory, setCurrentCategory] = useState(null);
  const [modalBook, setModalBook] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const { books, loading, error, fetchDetailsAndRatings } = useBookDetails();

  const fetchBooks = async (category) => {
    setFetchError(null);
    try {
      const booksRaw = await getBooksByCategory(category, 20);
      if (!booksRaw.length) throw new Error("No books found in this category");
      fetchDetailsAndRatings(booksRaw);
    } catch (err) {
      setFetchError(err.message || "Failed to fetch books");
    }
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    const cat = categories[randomIndex];
    setCurrentCategory(cat);
    fetchBooks(cat);
  };

  return (
    <Box sx={[mainContainer, display("flex"), flexDirection("column"), gap(2)]}>
      <Typography sx={[text(42), textAlign("center")]}>Random Book Discovery</Typography>
      <Typography sx={[text(16), textAlign("center")]}>Discover new books with our surprise selection</Typography>

      <Button sx={[selfAlign("center")]} variant="contained" onClick={handleRandom}>
        SURPRISE ME!
      </Button>
      
      {(error || fetchError) && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error || fetchError}
        </Typography>
      )}
      
      {loading && <BookSkeleton count={12} sx={{ mt: 2 }} />}
      
      {books.length > 0 && !loading && !error && !fetchError && (
        <Box sx={{ mt: 2 }}>
          <BookList books={books} onBookClick={setModalBook} />
        </Box>
      )}
      <BookModal open={!!modalBook} onClose={() => setModalBook(null)} book={modalBook} />
    </Box>
  );
}
