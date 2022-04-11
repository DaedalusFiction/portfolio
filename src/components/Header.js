import { Box, Container } from "@mui/material";
import React from "react";
import { Link } from "@mui/material";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
        <Box
            sx={{
                backgroundColor: "rgba(0 ,0 ,0 , 0.7)",
                position: "sticky",
                top: "0",
                padding: "1em 0",
                borderBottom: "1px solid var(--color-primary-dark)",
                zIndex: "3000",
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box>
                    <Link
                        href="/"
                        underline="none"
                        sx={{
                            color:
                                location.pathname === "/"
                                    ? "var(--color-primary)"
                                    : "var(--color-primary-dark)",
                            "&:hover": {
                                color: "var(--color-primary)",
                            },
                        }}
                    >
                        DS
                    </Link>
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: "3em" }}>
                    <Link
                        href="services"
                        underline="none"
                        sx={{
                            color:
                                location.pathname === "/services"
                                    ? "var(--color-primary)"
                                    : "var(--color-primary-dark)",
                            "&:hover": {
                                color: "var(--color-primary)",
                            },
                        }}
                    >
                        Services
                    </Link>
                    <Link
                        href="portfolio"
                        underline="none"
                        sx={{
                            color:
                                location.pathname === "/portfolio"
                                    ? "var(--color-primary)"
                                    : "var(--color-primary-dark)",
                            "&:hover": {
                                color: "var(--color-primary)",
                            },
                        }}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="contact"
                        underline="none"
                        sx={{
                            color:
                                location.pathname === "/contact"
                                    ? "var(--color-primary)"
                                    : "var(--color-primary-dark)",
                        }}
                    >
                        Contact
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
