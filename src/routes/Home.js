import {
    Box,
    Button,
    Card,
    Container,
    Fade,
    Grid,
    Input,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import code3 from "../assets/images/code3.jpg";
import chip from "../assets/images/chip.jpg";
import mobile from "../assets/images/mobile.jpg";
import sicktoothScreencap from "../assets/images/sicktoothScreencap.png";
import roadtripScreencap from "../assets/images/roadtripScreencap.png";
import snackbarScreencap from "../assets/images/snackbarScreencap.png";
import coding from "../assets/images/graphics/coding.svg";
import email from "../assets/images/graphics/email.svg";
import design from "../assets/images/graphics/design.svg";
import web from "../assets/images/graphics/web.svg";
import startup from "../assets/images/graphics/startup.svg";
import working from "../assets/images/graphics/working.svg";

import Hero from "../components/Hero";
import InfoCard from "../components/InfoCard";
import WebsitePreview from "../components/WebsitePreview";
import InfoCardHorizontal from "../components/InfoCardHorizontal";
import TechIconCard from "../components/TechIconCard";

import EmailForm from "../components/EmailForm";

const Home = () => {
    const [quoteInView, setQuoteInView] = useState(false);

    return (
        <Box>
            <Hero />
            <Container maxWidth="lg" sx={{ padding: "8rem 0 8rem 0" }}>
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
                            title="Unique"
                            photo={design}
                            description="Fully customized designs, built from the
                                    ground up in React.js and MUI, elevate your
                                    website's look and feel and create a
                                    memorable experience"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <InfoCard
                            delay={800}
                            title="Responsive"
                            photo={coding}
                            description="Mobile-first designs, so that you can reach the widest
                    demographic possible and thrive in the modern market"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <InfoCard
                            delay={1200}
                            title="Reliable"
                            photo={web}
                            description="Important data stored in Google's cloud
                                    service, Firebase, so that it is always
                                    restorable, just in case something happens"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <InfoCard
                            delay={1700}
                            title="Secure"
                            photo={working}
                            description="Authentication and authorization handled by Google's OAuth 2.0, the internet's most used and trusted authentication service"
                        />
                    </Grid>
                </Grid>
            </Container>
            <Box
                sx={{
                    backgroundColor: "var(--bg-accent)",
                    padding: "8rem 0 8rem 0",
                }}
            >
                <Container>
                    <Typography variant="h2" textAlign="center" gutterBottom>
                        The Process
                    </Typography>
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
                                }}
                            >
                                <Fade in={quoteInView} timeout={800}>
                                    <Typography
                                        variant="h6"
                                        color="primary"
                                        sx={{ textAlign: "center" }}
                                    >
                                        "David was absolutely wonderful to work
                                        with. He listened carefully to my needs
                                        and delivered exactly what I was looking
                                        for. 10/10 would recommend."
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
                                description="Websites are hosted on Netlify and domain registration is handled through Google Domains. Netlify is free up
                                    to a certain amount of traffic, and when
                                    your business takes off, scaling up is as
                                    simple as upgrading your plan"
                            />
                            <InfoCardHorizontal
                                delay={900}
                                title="Maintain"
                                description="Want to update or expand your website
                                    sometime down the line? I'll work with you to implement small to medium alterations
                                     and larger features, so that your website continues to grow as you do"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ marginTop: "8rem", marginBottom: "8rem" }}>
                <Typography variant="h2" textAlign="center">
                    My Work
                </Typography>
                <WebsitePreview
                    align="right"
                    type="Literary Magazine"
                    title="SICKTOOTH"
                    content="Firebase and React, MUI"
                    background={sicktoothScreencap}
                    github="https://github.com/DaedalusFiction/sicktooth"
                    website="https://www.sicktooth.com/"
                />
                <WebsitePreview
                    align="left"
                    type="Landing Page"
                    title="SNACKBAR"
                    content="React and MUI"
                    background={snackbarScreencap}
                    github="https://github.com/DaedalusFiction/snackbar"
                    website="https://www.snackbarband.com/"
                />

                <WebsitePreview
                    align="right"
                    type="Event"
                    title="The Great Road Trip"
                    content="Form submissions, photo gallery"
                    background={roadtripScreencap}
                    github="https://github.com/DaedalusFiction/roadtrip"
                    website="https://www.thegreatroadtrip.net/"
                />
            </Box>
            <Box
                sx={{ backgroundColor: "var(--bg-accent)", padding: "8rem 0" }}
            >
                <Container maxWidth="sm">
                    <Typography
                        variant="h3"
                        sx={{ textAlign: "center", marginBottom: "1em" }}
                    >
                        Technologies
                    </Typography>
                    <Grid container>
                        <Tooltip title="React" followCursor>
                            <Grid
                                item
                                xs={6}
                                sm={3}
                                sx={{ paddingTop: ".2em" }}
                            >
                                <TechIconCard path={"react"} />
                            </Grid>
                        </Tooltip>
                        <Tooltip title="Material UI" followCursor>
                            <Grid
                                item
                                xs={6}
                                sm={3}
                                sx={{ paddingTop: ".6em" }}
                            >
                                <TechIconCard path={"material"} />
                            </Grid>
                        </Tooltip>
                        <Tooltip title="Firebase" followCursor>
                            <Grid
                                item
                                xs={6}
                                sm={3}
                                sx={{ paddingLeft: "1.2em" }}
                            >
                                <TechIconCard path={"firebase"} />
                            </Grid>
                        </Tooltip>
                        <Tooltip title="OAuth 2.0" followCursor>
                            <Grid item xs={6} sm={3}>
                                <TechIconCard path={"oauth"} />
                            </Grid>
                        </Tooltip>
                        <Tooltip title="Node Package Manager" followCursor>
                            <Grid item xs={6} sm={3} sx={{ paddingTop: "2em" }}>
                                <TechIconCard path={"npm"} />
                            </Grid>
                        </Tooltip>
                        <Tooltip title="Github" followCursor>
                            <Grid item xs={6} sm={3}>
                                <TechIconCard path={"github"} />
                            </Grid>
                        </Tooltip>
                        <Tooltip title="netlify" followCursor>
                            <Grid item xs={6} sm={3}>
                                <TechIconCard path={"netlify"} />
                            </Grid>
                        </Tooltip>
                        <Tooltip title="JavaScript" followCursor>
                            <Grid item xs={6} sm={3} sx={{}}>
                                <TechIconCard path={"javascript"} />
                            </Grid>
                        </Tooltip>
                        <Tooltip title="HTML5" followCursor>
                            <Grid
                                item
                                xs={6}
                                sm={3}
                                sx={{ paddingLeft: ".7em" }}
                            >
                                <TechIconCard path={"html5"} />
                            </Grid>
                        </Tooltip>
                        <Tooltip title="CSS" followCursor>
                            <Grid item xs={6} sm={3}>
                                <TechIconCard path={"css3"} />
                            </Grid>
                        </Tooltip>
                        <Tooltip title="Figma" followCursor>
                            <Grid
                                item
                                xs={6}
                                sm={3}
                                sx={{ paddingLeft: "1.75em" }}
                            >
                                <TechIconCard path={"figma"} />
                            </Grid>
                        </Tooltip>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Container
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "2rem",
                        padding: "8rem 1em 8rem 1em",
                    }}
                >
                    <Typography
                        variant="h3"
                        textAlign="center"
                        // sx={{ padding: "0 1em", textAlign: "center" }}
                    >
                        Ready to Get Started?
                    </Typography>
                    <Typography variant="h6" textAlign="center">
                        Schedule a free one-on-one strategy session now!
                    </Typography>
                    <EmailForm />
                </Container>
            </Box>
        </Box>
    );
};

export default Home;
