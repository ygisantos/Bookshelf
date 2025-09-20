import { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import BookModal from "../modal/BookModal";
import { browseSearchBar, mainContainer, browseNoResult, sectionTitle } from "../styling/global-style";
import { searchBooks } from "../api/Api";
import BookList from "../components/shared/BookList";
import BookSkeleton from "../components/shared/BookSkeleton";
import { useBookDetails } from "../hooks/useBookDetails";

export default function Browse() {
  const [query, setQuery] = useState("");
  const [entered, setEntered] = useState(false);
  const [modalBook, setModalBook] = useState(null);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);
  
  const { books, loading: loadingDetails, fetchDetailsAndRatings } = useBookDetails();

  const handleSearch = async () => {
    if (!query.trim()) return;
    setSearching(true);
    setSearchError(null);

    try {
      const docs = await searchBooks(query, 18);
      setEntered(true);
      fetchDetailsAndRatings(docs);
    } catch (err) {
      setSearchError("Failed to fetch search results");
    } finally {
      setSearching(false);
    }
  };

  const isLoading = searching || loadingDetails;

  return (
    <Box sx={mainContainer}>
      {!books.length && !isLoading && (
        <Typography align="center" sx={{ ...sectionTitle, width: "100%" }}>
          Browse Books
        </Typography>
      )}
      
      <Box sx={browseSearchBar}>
        <TextField
          fullWidth
          label="Search by title, author, or subject"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          disabled={isLoading || !query.trim()}
        >
          Search
        </Button>
      </Box>

      {isLoading && <BookSkeleton count={12} />}
      {searchError && <Typography color="error">{searchError}</Typography>}
      {!isLoading && query.trim() && books.length === 0 && !searchError && entered && (
        <Box sx={browseNoResult}>
          <Typography variant="h6" sx={{ color: "#888" }}>
            No books found for "{query.trim()}"
          </Typography>
          <Typography variant="body2" sx={{ color: "#aaa" }}>
            Try a different title, author, or subject.
          </Typography>
        </Box>
      )}

      {!isLoading && books.length > 0 && ( <BookList books={books} onBookClick={setModalBook} /> )}
        <BookModal open={!!modalBook} onClose={() => setModalBook(null)} book={modalBook} />
    </Box>
  );
}
