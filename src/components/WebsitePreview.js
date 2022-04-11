import { Box, Button, Grid, Link, Slide, Typography } from "@mui/material";
import { useState } from "react";
import InView from "react-intersection-observer";

const WebsitePreview = ({
    align,
    background,
    type,
    title,
    content,
    github,
    website,
}) => {
    const [isInView, setIsInView] = useState(false);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: {
                    xs: "start",
                    sm: align === "left" ? "start" : "end",
                },
                margin: ".25em 0",
                padding: "7vw 12vw",
                backgroundImage: `linear-gradient(to ${align}, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
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
                <InView
                    as="div"
                    onChange={(inView, entry) => {
                        setIsInView(inView);
                    }}
                >
                    <Link
                        underline="none"
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Slide
                            direction={align === "left" ? "right" : "left"}
                            in={isInView}
                            timeout={align === "left" ? 750 : 450}
                        >
                            <Button>Github</Button>
                        </Slide>
                    </Link>
                </InView>
                <Link
                    underline="none"
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Slide
                        direction={align === "left" ? "right" : "left"}
                        in={isInView}
                        timeout={align === "left" ? 350 : 550}
                    >
                        <Button>Website</Button>
                    </Slide>
                </Link>
            </Box>
        </Box>
    );
};

export default WebsitePreview;
