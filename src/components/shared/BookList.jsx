import { Box } from "@mui/material";
import BookCard from "../BookCard";
import { cardGrid } from "../../styling/global-style";

export default function BookList({ books = [], onBookClick }) {
  return (
    <Box sx={cardGrid}>
      {books.map((book, i) => (
        <Box
          key={book.key || i}
          sx={{ cursor: "pointer" }}
          onClick={() => onBookClick?.(book)}
        >
          <BookCard
            image={`https://covers.openlibrary.org/b/id/${ book.covers?.[0] || book.cover_id || book.cover_i }-L.jpg`}
            title={book.title}
            author={ Array.isArray(book.author_name) ? book.author_name.join(", ") : book.author_name || "" }
            publishDate={book.first_publish_year || ""}
            rating={book.rating ?? "-"}
            trendingCount={book.trendingCount}
          />
        </Box>
      ))}
    </Box>
  );
}