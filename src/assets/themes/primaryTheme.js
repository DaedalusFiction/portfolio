import { createTheme } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        type: "dark",
        background: {
            default: "#171717",
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
            fontFamily: "Oxanium",
            fontSize: "4rem",
        },
        h2: {
            color: "white",
            fontFamily: "Oxanium",
        },
        h3: {
            color: "white",
            fontFamily: "Oxanium",
        },
        h4: {
            // fontFamily: "Oxanium",
        },
        h5: {
            color: "var(--color-primary)",
            fontFamily: "Oxanium",
            fontWeight: "bold",
        },
        h6: {
            color: "var(--color-primary)",

            fontSize: "1.2rem",
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
                        "linear-gradient(-45deg, #aaffa9 30%, #11ffbd 90%)",
                    border: 0,
                    padding: ".6em 1.5em",
                    textDecoration: "none",

                    color: "black",
                    "&:hover": {
                        transition: "300ms",
                        background:
                            "linear-gradient(45deg, #aaffa9 30%, #11ffbd 90%)",
                        transform: "translateY(-3px)",
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
