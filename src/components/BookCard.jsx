import React from "react";
import { Typography, Skeleton, CardMedia, CardContent, Card, Box, Chip } from "@mui/material";
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
  const [imgLoaded, setImgLoaded] = React.useState(false);
  return (
    <Card sx={bookCard}>
      <Box sx={{ position: 'relative' }}>
        {!imgLoaded && (
          <Box sx={{ position: 'absolute', width: '100%', height: 180, top: 0, left: 0 }}>
            <Skeleton variant="rectangular" width="100%" height={180} />
          </Box>
        )}
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={title}
          sx={{ ...bookCardMedia, display: imgLoaded ? 'block' : 'none' }}
          onLoad={() => setImgLoaded(true)}
        />
      </Box>
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
