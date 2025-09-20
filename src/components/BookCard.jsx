import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarIcon from "@mui/icons-material/Star";
import {
  bookCard,
  bookCardMedia,
  bookCardContent,
  bookCardBottom,
  bookCardRating,
  bookCardStar
} from '../styling/global-style';

export default function BookCard({
  image,
  title,
  author,
  publishDate,
  trendingCount,
  rating
}) {
  return (
    <Card sx={bookCard}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
        sx={bookCardMedia}
      />
      <CardContent sx={bookCardContent}>
        <Typography variant="h6" component="div" noWrap gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {author}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {publishDate}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={bookCardBottom}>
          {trendingCount && 
          <Chip
            icon={<TrendingUpIcon />}
            label={`#${trendingCount} Trending`}
            size="small"
            color="primary"
            sx={{ fontWeight: 600 }}
          />
          }
          <Box sx={bookCardRating}>
            <StarIcon sx={bookCardStar} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {rating}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
