import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import CardComponent from "../../components/learningcenter/LandingCardComponent";
import Link from "next/link";

export default function LearningCenterWelcome(props) {
  return (
    <div>
      <Box sx={{ my: 5 }}>
        <Container maxWidth="lg">
          <Link href="/">
            <Button>Home</Button>
          </Link>
          <Grid
            container
            wrap="wrap"
            spacing={3}
            sx={{ my: 1, display: "flex", alignItems: "stretch" }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bolder",
                  textAlign: "center",
                  textTransform: "uppercase",
                  pb: 2,
                }}
              >
                Welcome to the CellCore Learning Center
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center", py: 1 }}>
                This resource was created to provide CellCore practitioners with
                cutting-edge research, education and the latest science in
                foundational medicine. All within one convenient location,
                that's accessible 24/7 from your phone, tablet or computer.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            wrap="wrap"
            spacing={3}
            sx={{ my: 1, display: "flex", alignItems: "stretch" }}
          >
            <Grid item xs={12} md={6} lg={6}>
              <CardComponent
                mobileImg="https://res.cloudinary.com/microbe/image/upload/f_auto/cellcore/img/dashboard/Courses.jpg"
                desktopImg="https://res.cloudinary.com/microbe/image/upload/f_auto/cellcore/img/dashboard/Courses.jpg"
                link="/learningcenter/courses"
                title="Courses"
                description="Our library of core education"
                buttonText="Explore"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <CardComponent
                title="Live with the Docs"
                description="Recordings of Q &amp; A sessions with our founders"
                link="/learningcenter/liveqa"
                mobileImg="https://res.cloudinary.com/microbe/image/upload/f_auto/cellcore/img/dashboard/Live_with_the_Docs.jpg"
                desktopImg="https://res.cloudinary.com/microbe/image/upload/f_auto/cellcore/img/dashboard/Live_with_the_Docs.jpg"
                buttonText="Watch"
              />
            </Grid>
          </Grid>
          <Grid
            container
            wrap="wrap"
            spacing={3}
            sx={{ my: 1, display: "flex", alignItems: "stretch" }}
          >
            <Grid item xs={12} md={6} lg={6}>
              <CardComponent
                title="Articles"
                description="Searchable list of healthcare topics"
                link="/learningcenter/articles"
                mobileImg="https://res.cloudinary.com/microbe/image/upload//f_autocellcore/img/dashboard/Articles.jpg"
                desktopImg="https://res.cloudinary.com/microbe/image/upload/f_auto/cellcore/img/dashboard/Articles.jpg"
                buttonText="Read"
              />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <CardComponent
                title="Webinars"
                description="Past episodes of our Monthly Webinar series"
                link="/learningcenter/webinars"
                mobileImg="https://res.cloudinary.com/microbe/image/upload/f_auto/cellcore/img/dashboard/Webinars.jpg"
                desktopImg="https://res.cloudinary.com/microbe/image/upload/f_auto/cellcore/img/dashboard/Webinars.jpg"
                buttonText="Browse"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <CardComponent
                title="ECO"
                description="ECO event resources"
                link="/learningcenter/ECO"
                mobileImg="https://res.cloudinary.com/microbe/image/upload/f_auto/cellcore/img/dashboard/ECO.jpg"
                desktopImg="https://res.cloudinary.com/microbe/image/upload/f_auto/cellcore/img/dashboard/ECO.jpg"
                buttonText="Watch"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
