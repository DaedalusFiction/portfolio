import { Box, Container, Typography } from "@mui/material";
import React from "react";
import EmailForm from "../components/EmailForm";
import saturn from "../assets/images/backgrounds/saturn.jpg";

const Contact = () => {
    return (
        <Box
            sx={{
                // backgroundImage: `url(${earth})`,
                backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.25), rgba(23, 23, 23, 1)),
  url(${saturn})`,
                backgroundSize: "cover",
                padding: "15vw 0 10vw 0",
                backgroundAttachment: "fixed",
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h6"
                    sx={{
                        maxWidth: "45ch",
                        color: "var(--color-primary)",
                        lineHeight: "1.4em",
                        margin: "1em auto",
                    }}
                    textAlign="center"
                >
                    Ready to bring your idea to life? Enter your email below to
                    schedule a free one-on-one strategy session and let's talk
                    about your vision!
                </Typography>
                <EmailForm />
            </Container>
        </Box>
    );
};

export default Contact;
