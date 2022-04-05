import { Box, Container } from "@mui/material";
import React from "react";
import { Link } from "@mui/material";

const Header = () => {
    return (
        <Box
            sx={{
                backgroundColor: "rgba(0 ,0 ,0 ,0.8)",
                position: "sticky",
                top: "0",
                padding: "1em 0",
                borderBottom: "1px solid var(--color-primary-dark)",
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box>
                    <Link href="/" underline="hover">
                        DS
                    </Link>
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: "3em" }}>
                    <Link href="services" underline="hover">
                        Services
                    </Link>
                    <Link href="portfolio" underline="hover">
                        Portfolio
                    </Link>
                    <Link href="contact" underline="hover">
                        Contact
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
