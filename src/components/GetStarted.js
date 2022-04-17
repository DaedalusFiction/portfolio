import { Box, Container, Typography } from "@mui/material";
import React from "react";
import EmailForm from "./EmailForm";

const GetStarted = () => {
    return (
        <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0)", zIndex: "-4" }}>
            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem",
                    padding: "8rem 1em 8rem 1em",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    zIndex: "-4",
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
    );
};

export default GetStarted;
