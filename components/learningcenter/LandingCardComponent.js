import React from "react";
import { Card, CardActionArea, Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "next/link";

const LandingCardComponent = (props) => {
  const { title, description, link, buttonText, mobileImg, desktopImg } = props;
  return (
    <Card sx={{ ":hover": { boxShadow: 20 } }}>
      <CardActionArea
        component={RouterLink}
        to={{
          pathname: link,
        }}
      >
        <Box
          component="img"
          sx={{
            maxWidth: "100%",
            height: "auto",
            content: {
              xs: `url(${mobileImg})`, //img src from xs up to md
              md: `url(${desktopImg})`, //img src from md and up
            },
          }}
          alt={title}
        />
        <Box sx={{ p: 2 }}>
          <Typography
            variant="body1"
            sx={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
          <Button variant="outlined" size="small" sx={{ mt: 1 }}>
            {buttonText}
          </Button>
        </Box>
      </CardActionArea>
    </Card>
  );
};
export default LandingCardComponent;
