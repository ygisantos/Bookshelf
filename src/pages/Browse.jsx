import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import BookCard from "../components/BookCard";
import BookModal from "../modal/BookModal";
import { cardGrid, sectionTitle, browseSearchBar, mainContainer, browseNoResult } from "../styling/global-style";
import { getBookDetails, getBookRating, searchBooks } from "../api/Api";
import api from "../api/axios";

export default function Browse() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalBook, setModalBook] = useState(null);
  const [entered, setEntered] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const docs = await searchBooks(query, 20);
      const detailed = await Promise.all(
        docs.map(async (doc) => {
          try {
            const details = await getBookDetails(doc.key);
            return { ...doc, ...details };
          } catch {
            return doc;
          }
        })
      );
      setResults(detailed);
      // fetch ratings async
      const fetchRatings = async (books) => {
        for (let i = 0; i < books.length; i++) {
          const book = books[i];
          if (!book.key) continue;
          try {
            const rating = await getBookRating(book.key);
            setResults((prev) =>
              prev.map((b) =>
                b.key === book.key ? { ...b, rating } : b
              )
            );
          } catch { }
          await new Promise((res) => setTimeout(res, 700));
        }
      };
      fetchRatings(detailed);
    } catch (err) {
      setError("Failed to fetch search results");
    } finally {
      setEntered(true);
      setLoading(false);
    }
  };

  return (
    <Box sx={mainContainer}>

      {!results.length && !loading && <Typography align={"center"} sx={{ ...sectionTitle, width: "100%" }}>Browse Books</Typography>}
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
              disabled={loading || !query.trim()}
            >
              Search
            </Button>
          </Box>

          {/* Loader / Error */}
          {loading && <CircularProgress />}
          {error && <Typography color="error">{error}</Typography>}
          {!loading && query.trim() && results.length === 0 && !error && entered && (
            <Box sx={browseNoResult}>
              <Typography variant="h6" sx={{ color: "#888" }}>
                No books found for "{query.trim()}"
              </Typography>
              <Typography variant="body2" sx={{ color: "#aaa" }}>
                Try a different title, author, or subject.
              </Typography>
            </Box>
          )}
          {/* Results */}
          <Box sx={cardGrid}>
            {results.map((book, i) => (
              <Box
                key={book.key || i}
                style={{ cursor: "pointer" }}
                onClick={() => setModalBook(book)}
              >
                <BookCard
                  image={`https://covers.openlibrary.org/b/id/${book.covers?.[0] || book.cover_id || book.cover_i
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
              </Box>
            ))}
          </Box>
        <BookModal open={!!modalBook} onClose={() => setModalBook(null)} book={modalBook} />
    </Box>
  );
}
