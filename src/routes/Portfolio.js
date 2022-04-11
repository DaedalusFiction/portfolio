import { Container, Typography } from "@mui/material";
import React from "react";
import WebsitePreview from "../components/WebsitePreview";
import sicktoothScreencap from "../assets/images/sicktoothScreencapBlurred.png";
import roadtripScreencap from "../assets/images/roadtripScreencapBlurred.png";
import snackbarScreencap from "../assets/images/snackbarScreencapBlurred.png";

const Portfolio = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Typography variant="h1" color="primary">
                    Portfolio
                </Typography>
            </Container>
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
        </>
    );
};

export default Portfolio;
