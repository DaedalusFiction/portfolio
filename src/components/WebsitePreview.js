import {
    Box,
    Button,
    Container,
    Fade,
    Grid,
    Link,
    Slide,
    Typography,
} from "@mui/material";
import { useRef, useState } from "react";
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
    const containerRef = useRef(null);
    return (
        <InView
            as="div"
            onChange={(inView, entry) => {
                setIsInView(inView);
            }}
        >
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
                    borderTop: "1px solid var(--color-secondary)",
                    borderBottom: "1px solid var(--color-secondary)",
                    overflow: "hidden",
                }}
            >
                <Fade
                    in={isInView}
                    timeout={350}
                    style={{ transitionDelay: "550ms" }}
                >
                    <Typography variant="h5" color="primary">
                        {type}
                    </Typography>
                </Fade>
                <Fade
                    in={isInView}
                    timeout={350}
                    style={{ transitionDelay: "150ms" }}
                >
                    <Typography variant="h2" component="h3" color="white">
                        {title}
                    </Typography>
                </Fade>
                <Fade
                    in={isInView}
                    timeout={350}
                    style={{ transitionDelay: "750ms" }}
                >
                    <Typography variant="p" color="primary">
                        {content}
                    </Typography>
                </Fade>
                <Box
                    sx={{
                        display: "flex",
                        gap: "1em",
                        marginTop: "1em",
                    }}
                    container={containerRef.current}
                >
                    <Link
                        underline="none"
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        ref={containerRef}
                    >
                        <Slide
                            direction={align === "left" ? "right" : "left"}
                            in={isInView}
                            timeout={align === "left" ? 850 : 550}
                            easing="ease-out"
                        >
                            <Button>Github</Button>
                        </Slide>
                    </Link>
                    <Link
                        underline="none"
                        href={website}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Slide
                            direction={align === "left" ? "right" : "left"}
                            in={isInView}
                            timeout={align === "left" ? 550 : 850}
                            easing="ease-out"
                        >
                            <Button>Website</Button>
                        </Slide>
                    </Link>
                </Box>
            </Box>
        </InView>
    );
};

export default WebsitePreview;
