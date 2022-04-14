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
            <Container>
                <Box
                    sx={{
                        // border: "1px solid var(--color-secondary)",
                        display: "flex",
                        flexFlow: {
                            xs: "row",
                            sm: align === "right" ? "row-reverse" : "row",
                        },
                        // flexWrap: "wrap",
                        padding: "3rem 0",
                        gap: "3rem",
                        overflow: "hidden",
                        // justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={
                            {
                                // display: "flex",
                                // flexDirection: "column",
                                // alignItems: {
                                //     xs: "start",
                                //     sm: align === "left" ? "start" : "end",
                                // },
                                // margin: ".5em 0",
                                // padding: "7vw 12vw",
                                // filter: "blur(2px)",
                                // backgroundSize: "cover",
                            }
                        }
                    >
                        <Fade
                            in={isInView}
                            timeout={350}
                            style={{ transitionDelay: "550ms" }}
                        >
                            <Typography
                                variant="h5"
                                color="primary"
                                textAlign={"start"}
                            >
                                {type}
                            </Typography>
                        </Fade>
                        <Fade
                            in={isInView}
                            timeout={350}
                            style={{ transitionDelay: "150ms" }}
                        >
                            <Typography
                                variant="h2"
                                component="h3"
                                color="white"
                                textAlign={"start"}
                            >
                                {title}
                            </Typography>
                        </Fade>
                        <Fade
                            in={isInView}
                            timeout={350}
                            style={{ transitionDelay: "750ms" }}
                        >
                            <Typography
                                variant="h6"
                                color="primary"
                                textAlign={"start"}
                            >
                                {content}
                            </Typography>
                        </Fade>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "start",
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
                                    direction={
                                        align === "left" ? "right" : "left"
                                    }
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
                                    direction={
                                        align === "left" ? "right" : "left"
                                    }
                                    in={isInView}
                                    timeout={align === "left" ? 550 : 850}
                                    easing="ease-out"
                                >
                                    <Button>Website</Button>
                                </Slide>
                            </Link>
                        </Box>
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <img
                            src={background}
                            alt=""
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Box>
                </Box>
            </Container>
        </InView>
    );
};

export default WebsitePreview;
