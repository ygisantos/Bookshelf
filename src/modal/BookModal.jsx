import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import {
    bookModalStyle,
    bookModalImage,
    bookModalHeader,
    bookModalContent,
    bookModalInfo,
    bookModalSubjects,
    bookModalDivider,
    bookModalDescription
} from "../styling/global-style";

export default function BookModal({ open, onClose, book }) {
    const [showMore, setShowMore] = useState(false);
    if (!book) return null;

    const description = book.description || "";
    const maxChars = 300;
    const isLong = description.length > maxChars;
    const displayDesc = showMore || !isLong ? description : description.slice(0, maxChars) + "...";

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={bookModalStyle}>
                <Box sx={bookModalHeader}>
                    <Typography variant="h6" fontWeight="bold">
                        {book.title}
                    </Typography>
                    <IconButton onClick={onClose} size="small">
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Main content */}
                <Box sx={bookModalContent}>
                    <img
                        src={`https://covers.openlibrary.org/b/id/${book.covers?.[0] || book.cover_id || book.cover_i}-L.jpg`}
                        alt={book.title}
                        style={bookModalImage}
                    />

                    <Box sx={bookModalInfo}>
                        <Typography variant="subtitle1" color="text.secondary">
                            {Array.isArray(book.author_name)
                                ? book.author_name.join(", ")
                                : book.author_name || ""}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            ⭐ Rating: <strong>{book.rating || "-"}</strong>
                        </Typography>
                        <Typography variant="body2">
                            📅 Published: {book.first_publish_year || "-"}
                        </Typography>

                        <Box sx={bookModalSubjects}>
                            {Array.isArray(book.subjects)
                                ? book.subjects.slice(0, 5).map((sub, i) => (
                                    <Chip key={i} label={sub} size="small" />
                                ))
                                : null}
                        </Box>
                    </Box>
                </Box>

                <Divider sx={bookModalDivider} />

                <Box>
                    <Typography variant="subtitle2" gutterBottom>
                        Description
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={bookModalDescription}
                    >
                        {displayDesc || "No Description to Display"}
                    </Typography>
                    {isLong && (
                        <Button size="small" onClick={() => setShowMore((v) => !v)}>
                            {showMore ? "Show less" : "Show more"}
                        </Button>
                    )}
                </Box>
            </Box>
        </Modal>
    );
}
