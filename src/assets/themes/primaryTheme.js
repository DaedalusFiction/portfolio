import { createTheme } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        type: "dark",
        background: {
            default: "#000000",
        },
        primary: {
            main: "#d5c8c8",
        },
        secondary: {
            main: "#F3CA40",
        },
    },
    typography: {
        h1: {
            color: "white",
        },
        h2: {
            color: "white",
        },
        h3: {
            color: "white",
        },
        p: {
            color: "var(--color-primary)",
        },
    },
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    fontSize: "1.2rem",
                    background:
                        "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    border: 0,
                    padding: ".75em 1.5em",
                    textDecoration: "none",

                    color: "white",
                    "&:hover": {
                        transition: "3000ms",
                        background:
                            "linear-gradient(-45deg, #FE6B8B 30%, #FF8E53 90%)",
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                // Name of the slot
                root: {
                    background:
                        "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    border: "1px solid var(--color-primary-dark)",

                    "&:hover": {
                        transition: "3000ms",
                        background:
                            "linear-gradient(-45deg, #FE6B8B 30%, #FF8E53 90%)",
                    },
                },
            },
        },
    },
});

export { darkTheme };
