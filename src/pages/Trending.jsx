import { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { getDaily, getBooksByCategory } from "../api/Api";
import BookModal from "../modal/BookModal";
import { mainContainer, sectionTitle } from "../styling/global-style";
import { getBookDetails, getBookRating } from "../api/Api";
import BookList from "../components/shared/BookList";
import BookSkeleton from "../components/shared/BookSkeleton";
import { useBookDetails } from "../hooks/useBookDetails";

const CATEGORIES = [
  { key: "fiction", label: "Popular Fiction", terms: ["fiction", "novel", "short stories"] },
  { key: "science", label: "Popular Science & Technology", terms: ["science", "technology", "mathematics"] },
  { key: "history_bio", label: "Popular History & Biography", terms: ["history", "historical", "biography", "memoir", "autobiography"] },
];

export default function Trending() {
  const [modalBook, setModalBook] = useState(null);
  const [categoryBooks, setCategoryBooks] = useState({});
  const { books: allBooks, loading, error, fetchDetailsAndRatings } = useBookDetails();
  const [fetchError, setFetchError] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setFetchError(null);
    setLoadingInitial(true);

    getDaily()
      .then(async (data) => {
        if (!isMounted) return;
        const works = Array.isArray(data?.works) ? data.works : [];
        const initialBooks = works.slice(0, 30);

        fetchDetailsAndRatings(initialBooks);

        const byCategory = {};
        for (let i = 0; i < CATEGORIES.length; i++) {
          const cat = CATEGORIES[i];
          try {
            let docs = [];
            for (let t = 0; t < cat.terms.length; t++) {
              const term = cat.terms[t];
              try {
                docs = await getBooksByCategory(term, 12);
                if (docs && docs.length) break;
              } catch (e) { }
            }

            const placeholders = (docs || []).slice(0, 6).map((d) => ({ ...d }));
            byCategory[cat.key] = placeholders;
            setCategoryBooks((prev) => ({ ...prev, [cat.key]: placeholders }));

            for (let j = 0; j < placeholders.length; j++) {
              const doc = placeholders[j];
              setTimeout(async () => {
                let enrichedDoc = { ...doc };
                try {
                  if (doc.key) {
                    const details = await getBookDetails(doc.key);
                    enrichedDoc = { ...enrichedDoc, ...details };
                  }
                } catch { }

                if (doc.key) enrichedDoc.rating = getBookRating(doc.key);
                setCategoryBooks((prev) => {
                  const catArr = Array.isArray(prev[cat.key]) ? [...prev[cat.key]] : [];
                  catArr[j] = enrichedDoc;
                  return { ...prev, [cat.key]: catArr };
                });
              }, j * 600); 
            }
          } catch (err) {
            byCategory[cat.key] = [];
          }
          if (i < CATEGORIES.length - 1) await new Promise((res) => setTimeout(res, 800));
        }
        setCategoryBooks(byCategory);
      })
      .catch((err) => {
        if (isMounted) {
          setFetchError(err.message || "Failed to fetch trending books");
        }
      })
      .finally(() => {
        if (isMounted) setLoadingInitial(false);
      });

    return () => { isMounted = false; };
  }, [fetchDetailsAndRatings]);

  if (error || fetchError) return <Typography color="error">{error || fetchError}</Typography>;

  return (
    <>
      <Box sx={mainContainer}>
        <Box>
          <Typography sx={[sectionTitle, {marginTop: "-40px"}]}>Trending Books Today</Typography>
          {loadingInitial || loading ? (
            <BookSkeleton count={12} />
          ) : allBooks.length > 0 ? (
            <BookList
              books={allBooks.slice(0, 12).map((book, i) => ({
                ...book,
                trendingCount: i + 1,
              }))}
              onBookClick={setModalBook}
            />
          ) : (
            <Typography>No trending books found.</Typography>
          )}
        </Box>

        {/* Category Sections */}
        {CATEGORIES.map((cat) => (
          <Box key={cat.key} sx={{ mt: 4 }}>
            <Typography sx={sectionTitle}>{cat.label}</Typography>
            {loadingInitial || loading ? (
              <BookSkeleton count={6} />
            ) : (categoryBooks[cat.key] || []).length > 0 ? (
              <BookList books={categoryBooks[cat.key]} onBookClick={setModalBook} />
            ) : (
              <Typography>No trending books found.</Typography>
            )}
          </Box>
        ))}
      </Box>
      <BookModal open={!!modalBook} onClose={() => setModalBook(null)} book={modalBook} />
    </>
  );
}
