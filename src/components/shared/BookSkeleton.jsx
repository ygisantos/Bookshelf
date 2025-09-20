import React from "react";
import { Box, Card, CardContent, CardMedia, Skeleton } from "@mui/material";
import { cardGrid, bookCard } from "../../styling/global-style";

export default function BookSkeleton({ count = 6, sx, ...rest }) {
  return (
    <Box sx={{ ...cardGrid, ...sx }} {...rest}>
      {Array.from({ length: count }).map((_, index) => (
        <Box key={index} sx={{ cursor: "default" }}>
          <Card sx={bookCard}>
            <CardMedia>
            <Skeleton
              variant="rectangular"
              sx={{ width: "100%", height: 180, bgcolor: "grey.300" }}
            />
            </CardMedia>

            <CardContent sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Skeleton variant="text" width="80%" height={28} />
            <Skeleton variant="text" width="60%" height={20} />
            <Skeleton variant="text" width="30%" height={16} />

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
              <Skeleton variant="rectangular" width={110} height={28} sx={{ borderRadius: 2 }} />
              <Skeleton variant="text" width={40} height={24} />
            </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}