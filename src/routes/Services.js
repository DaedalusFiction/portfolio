import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import InfoCard from "../components/InfoCard";
import stars from "../assets/images/stars2.jpg";
import deer from "../assets/images/deer.jpg";
import concrete from "../assets/images/concrete.jpg";
import building from "../assets/images/building.jpg";
import flower from "../assets/images/flower.jpg";

const Services = () => {
    return (
        <>
            <Box
                sx={{
                    // backgroundImage: `url(${earth})`,
                    backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.45), rgba(23, 23, 23, 1)),
  url(${stars})`,
                    backgroundSize: "cover",
                    padding: "20vw 0 10vw 0",
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h1" color="primary">
                        Services
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: "45ch",
                            color: "var(--color-primary-dark)",
                            lineHeight: "1.4em",
                        }}
                    >
                        I am committed to making sure my that my clients are
                        100% satisfied with the websites I build for them. If at
                        any point you decide that you want to go in a different
                        direction, I'll refund your money entirely, zero
                        questions asked.
                    </Typography>
                </Container>
            </Box>
            <Box>
                <Container
                    maxWidth="lg"
                    sx={{
                        paddingTop: "8rem",
                        paddingBottom: "8rem",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: "center",
                            color: "white",
                            marginBottom: "1em",
                        }}
                    >
                        How it Works
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={6} md={3}>
                            <InfoCard
                                delay={500}
                                title="Step One"
                                photo={building}
                                description="Schedule a free strategy session. Even if you never intend to hire me, I'd love to help you get a collect your thoughts and plan the way forward"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <InfoCard
                                delay={800}
                                title="Step Two"
                                photo={concrete}
                                description="Gather content. Select your color scheme and fonts, write up any descriptions and lists, anything that you want displayed on your website. I'll give you a list"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <InfoCard
                                delay={1200}
                                title="Step Three"
                                photo={deer}
                                description="Create. For most projects, I'll be able to create an initial version within a week. For the entire second week, I'll revise anything you like. "
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <InfoCard
                                delay={1700}
                                title="Step Four"
                                photo={flower}
                                description="Once you're completely satisfied with your website, I'll maintain the domain and host it myself forever, or I'll transfer part or all of it to you."
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Services;
