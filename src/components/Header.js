import {
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
// import { Link } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
    const location = useLocation();
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box
            sx={{
                backgroundColor: "rgba(0 ,0 ,0 , 0.7)",
                position: "sticky",
                top: "0",
                padding: "1em 0",
                borderBottom: "1px solid var(--color-secondary)",
                zIndex: "3",
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    className="header-links"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Link
                        to="/"
                        style={{
                            display: { xs: "block", md: "block" },
                            fontFamily: "Oxanium",
                            fontSize: "1.5rem",
                            color:
                                location.pathname === "/"
                                    ? "var(--color-primary)"
                                    : "var(--color-primary-dark)",

                            textDecoration: "none",
                        }}
                    >
                        DS
                    </Link>
                </Box>
                <Box
                    className="header-links"
                    sx={{
                        display: { xs: "none", md: "flex" },
                        gap: "3em",
                        alignItems: "center",
                    }}
                >
                    <Link
                        to="services"
                        style={{
                            color:
                                location.pathname === "/services"
                                    ? "var(--color-primary)"
                                    : "var(--color-primary-dark)",
                            textDecoration: "none",
                        }}
                    >
                        Services
                    </Link>
                    <Link
                        to="portfolio"
                        style={{
                            color:
                                location.pathname === "/portfolio"
                                    ? "var(--color-primary)"
                                    : "var(--color-primary-dark)",
                            textDecoration: "none",
                        }}
                    >
                        Portfolio
                    </Link>
                    <Link
                        to="contact"
                        style={{
                            color:
                                location.pathname === "/contact"
                                    ? "var(--color-primary)"
                                    : "var(--color-primary-dark)",
                            textDecoration: "none",
                        }}
                    >
                        Contact
                    </Link>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: "flex", md: "none" },
                        justifyContent: "flex-end",
                    }}
                >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon style={{ color: "var(--color-primary)" }} />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: "block", md: "none" },
                            zIndex: "4",
                        }}
                    >
                        <Link to="/">
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    sx={{ color: "black" }}
                                >
                                    Home
                                </Typography>
                            </MenuItem>
                        </Link>
                        <Link to="services">
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    sx={{ color: "black" }}
                                >
                                    Services
                                </Typography>
                            </MenuItem>
                        </Link>
                        <Link to="portfolio">
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    sx={{ color: "black" }}
                                >
                                    Portfolio
                                </Typography>
                            </MenuItem>
                        </Link>
                        <Link to="contact">
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    sx={{ color: "black" }}
                                >
                                    Contact
                                </Typography>
                            </MenuItem>
                        </Link>
                    </Menu>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
