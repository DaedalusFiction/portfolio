import {
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "@mui/material";
import { useLocation } from "react-router-dom";
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
                <Box>
                    <Link
                        href="/"
                        underline="none"
                        sx={{
                            display: { xs: "none", md: "flex" },
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
                            "&:hover": {
                                color: "var(--color-primary)",
                            },
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
                        <Link href="/" underline="none">
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    sx={{ color: "black" }}
                                >
                                    Home
                                </Typography>
                            </MenuItem>
                        </Link>
                        <Link href="services" underline="none">
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    sx={{ color: "black" }}
                                >
                                    Services
                                </Typography>
                            </MenuItem>
                        </Link>
                        <Link href="portfolio" underline="none">
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    sx={{ color: "black" }}
                                >
                                    Portfolio
                                </Typography>
                            </MenuItem>
                        </Link>
                        <Link href="contact" underline="none">
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
