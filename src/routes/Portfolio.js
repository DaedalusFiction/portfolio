import { Container, Typography } from "@mui/material";
import React from "react";
import WebsitePreview from "../components/WebsitePreview";
import sicktoothScreencap from "../assets/images/sicktoothScreencapBlurred.png";
import roadtripScreencap from "../assets/images/roadtripScreencapBlurred.png";
import snackbarScreencap from "../assets/images/snackbarScreencapBlurred.png";
import playlistScreencap from "../assets/images/playlistScreencapBlurred.jpg";
import streamerizeScreencap from "../assets/images/streamerizeScreencapBlurred.jpg";
import { Box } from "@mui/system";
import eclipse from "../assets/images/eclipse.jpg";

const Portfolio = () => {
    return (
        <>
            <Box
                sx={{
                    // backgroundImage: `url(${earth})`,
                    backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.1), rgba(23, 23, 23, 1)),
  url(${eclipse})`,
                    backgroundSize: "cover",
                    padding: "20vw 0 10vw 0",
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h1" color="primary">
                        Portfolio
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: "45ch",
                            color: "var(--color-primary-dark)",
                            lineHeight: "1.4em",
                        }}
                    >
                        Below is a selection of projects I've completed. Nearly
                        all are created in React and Material UI, and all are
                        100% my own work.
                    </Typography>
                </Container>
            </Box>
            <WebsitePreview
                align="right"
                type="Literary Magazine"
                title="SICKTOOTH"
                content="Created in React and MUI"
                background={sicktoothScreencap}
                github="https://github.com/DaedalusFiction/sicktooth"
                website="https://www.sicktooth.com/"
            />
            <WebsitePreview
                align="left"
                type="Landing Page"
                title="SNACKBAR"
                content="Created in React and MUI"
                background={snackbarScreencap}
                github="https://github.com/DaedalusFiction/snackbar"
                website="https://www.snackbarband.com/"
            />

            <WebsitePreview
                align="right"
                type="Event"
                title="The Great Road Trip"
                content="Created in React and MUI"
                background={roadtripScreencap}
                github="https://github.com/DaedalusFiction/roadtrip"
                website="https://www.thegreatroadtrip.net/"
            />
            <WebsitePreview
                align="left"
                type="Application"
                title="Playlist 23"
                content="Uses Socket.io for chat and shared music playback"
                background={playlistScreencap}
                github="https://github.com/DaedalusFiction/playlist23"
                website="http://playlist23.herokuapp.com/"
            />
            <WebsitePreview
                align="right"
                type="Application"
                title="Streamerize"
                content="Random twitch.tv stream embedded via twitch API"
                background={streamerizeScreencap}
                github="https://github.com/DaedalusFiction/radio-project"
                website="https://www.streamerize.com/"
            />
        </>
    );
};

export default Portfolio;
