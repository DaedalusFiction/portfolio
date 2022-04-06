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
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "start", sm: align },
                margin: ".25em 0",
                padding: "5vw 12vw",
                backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.7), rgba(0, 0, 0, 0.8)),
  url(${background})`,
                backgroundSize: "cover",
                borderTop: "1px solid var(--color-primary-dark)",
                borderBottom: "1px solid var(--color-primary-dark)",
            }}
        >
            <Typography variant="h5" color="primary">
                {type}
            </Typography>
            <Typography variant="h3" color="white">
                {title}
            </Typography>
            <Typography variant="p" color="primary">
                {content}
            </Typography>
            <Box sx={{ display: "flex", gap: "1em", marginTop: "1em" }}>
                <Link href={github}>
                    <Button>Github</Button>
                </Link>
                <Link href={website}>
                    <Button>Visit Website</Button>
                </Link>
            </Box>
        </Box>
    );
};

export default WebsitePreview;
