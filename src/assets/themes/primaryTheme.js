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
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    background:
                        "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    border: 0,
                    padding: ".5em 1em",

                    color: "white",
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
