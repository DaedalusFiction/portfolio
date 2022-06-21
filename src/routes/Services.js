import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import InfoCard from "../components/InfoCard";
import stars from "../assets/images/backgrounds/stars2.jpg";

import GetStarted from "../components/GetStarted";
import coding from "../assets/images/graphics/coding.svg";
import email from "../assets/images/graphics/email.svg";
import web from "../assets/images/graphics/web.svg";
import startup from "../assets/images/graphics/startup.svg";

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
                    backgroundAttachment: "fixed",
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
                        I am committed to making sure that you are 100%
                        satisfied with the website I'll build for you.
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
                                title="Step One: Contact"
                                photo={email}
                                description="Schedule a free strategy session. Even if you never intend to hire me, I'd love to help you collect your thoughts and plan the way forward"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <InfoCard
                                delay={800}
                                title="Step Two: Gather"
                                photo={startup}
                                description="Determine what information you'd like to convey and what functions you'd like your website to perform, write up descriptions and lists, and collate photos."
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <InfoCard
                                delay={1200}
                                title="Step Three: Create"
                                photo={coding}
                                description="This one's mine. For most projects, I'll be able to create an initial version within a week. For the entire second week, I'll revise anything you like."
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <InfoCard
                                delay={1700}
                                title="Step Four: Relax"
                                photo={web}
                                description="For a small semi-annual fee I'll host and maintain your website. When your business takes off, scaling up is as easy as upgrading your data plans."
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <GetStarted />
        </>
    );
};

export default Services;
