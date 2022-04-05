import { Box, Card, Container, Fade, Grid, Typography } from "@mui/material";
import Hero from "../components/Hero";

import code3 from "../assets/images/code3.jpg";
import code2 from "../assets/images/code2.jpg";
import chip from "../assets/images/chip.jpg";
import mobile from "../assets/images/mobile.jpg";
import InfoCard from "../components/InfoCard";

import { InView } from "react-intersection-observer";
import { useState } from "react";
import InfoCardHorizontal from "../components/InfoCardHorizontal";

const Home = () => {
    const [quoteInView, setQuoteInView] = useState(false);

    return (
        <Box>
            <Hero />

            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: "center",
                        color: "white",
                        marginBottom: "1em",
                    }}
                >
                    Powerful Design, Robust Coding
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <InfoCard
                            delay={500}
                            title="Responsive"
                            photo={mobile}
                            description="Mobile-first designs, so that you can reach the widest
                    demographic possible and thrive in the modern market"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <InfoCard
                            delay={800}
                            title="Secure"
                            photo={chip}
                            description="Authentication and authorization handled by Google's OAuth 2.0, the internet's most used and trusted authentication service"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <InfoCard
                            delay={1200}
                            title="Reliable"
                            photo={code3}
                            description="Important data stored in Google's cloud
                                    service, Firebase, so that it is always
                                    restorable in case something happens"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <InfoCard
                            delay={1700}
                            title="Unique"
                            photo={code2}
                            description="Fully customized designs, built from the
                                    ground up in React.js and MUI, elevate your
                                    website's look and feel and create a
                                    memorable experience"
                        />
                    </Grid>
                </Grid>
            </Container>

            <Container sx={{ marginTop: "8rem" }}>
                <Grid container spacing={6}>
                    <Grid
                        item
                        xs={12}
                        md={5}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <InView
                            as="div"
                            onChange={(inView, entry) => {
                                setQuoteInView(inView);
                                console.log("viewed");
                            }}
                        >
                            <Fade in={quoteInView} timeout={800}>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    sx={{ textAlign: "center" }}
                                >
                                    "David was absolutely wonderful to work
                                    with. He listened carefully to my needs and
                                    delivered exactly what I was looking for"
                                </Typography>
                            </Fade>
                        </InView>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <InfoCardHorizontal
                            delay={400}
                            title="Design"
                            description="Provide your own wireframes, or let me
                                create a unique and inspiring design in 
                                Figma, an easy-to-use browser-based 
                                design software that will allow you to 
                                collaborate alongside me in real time"
                        />
                        <InfoCardHorizontal
                            delay={600}
                            title="Deploy"
                            description="Websites are created in React.js and MUI, 
                                then hosted on Netlify. Netlify is free up
                                to a certain amount of traffic, and when
                                your business takes off, scaling up is as
                                simple as upgrading your plan"
                        />
                        <InfoCardHorizontal
                            delay={900}
                            title="Maintain"
                            description="Want to update or add to your website 
                                sometime down the line? Implement small to medium alterations
                                at a modest hourly rate and larger features on a case-by-case basis"
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;
