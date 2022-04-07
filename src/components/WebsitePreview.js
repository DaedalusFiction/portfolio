import { Box, Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import earth from "../assets/images/earth.jpg";

const WebsitePreview = ({
    align,
    background,
    type,
    title,
    content,
    github,
    website,
}) => {
    const direction = align === "end" ? "right" : "left";
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "start", sm: align },
                margin: ".25em 0",
                padding: "7vw 12vw",
                backgroundImage: `linear-gradient(to ${direction}, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
  url(${background})`,
                // filter: "blur(2px)",
                backgroundSize: "cover",
                borderTop: "1px solid var(--color-primary-dark)",
                borderBottom: "1px solid var(--color-primary-dark)",
            }}
        >
            <Typography variant="h5" color="primary">
                {type}
            </Typography>
            <Typography variant="h2" component="h3" color="white">
                {title}
            </Typography>
            <Typography variant="p" color="primary">
                {content}
            </Typography>
            <Box sx={{ display: "flex", gap: "1em", marginTop: "1em" }}>
                <Link
                    underline="none"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button>Github</Button>
                </Link>
                <Link
                    underline="none"
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button>Website</Button>
                </Link>
            </Box>
        </Box>
    );
};

export default WebsitePreview;
