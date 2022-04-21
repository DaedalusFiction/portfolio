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
import { useEffect, useRef, useState } from "react";
import InView from "react-intersection-observer";
import { FiArrowRight } from "react-icons/fi";
import VanillaTilt from "vanilla-tilt";

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

    const tilt = useRef(null);

    useEffect(() => {
        const tiltImage = tilt.current;
        const options = {
            speed: 1000,
            max: 5,
        };
        console.log("added");

        VanillaTilt.init(tilt.current, options);
        return () => {
            console.log("destroyed");
            tiltImage.vanillaTilt.destroy();
        };
    }, []);

    return (
        <InView
            as="div"
            onChange={(inView, entry) => {
                if (inView) {
                    setIsInView(true);
                }
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
                                sx={{ lineHeight: "1em" }}
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
                            <Slide
                                direction={align === "left" ? "right" : "left"}
                                in={isInView}
                                timeout={align === "left" ? 850 : 550}
                                easing="ease-out"
                            >
                                <Link
                                    underline="none"
                                    href={github}
                                    target="_blank"
                                    rel="noreferrer"
                                    ref={containerRef}
                                >
                                    <Button endIcon={<FiArrowRight />}>
                                        Github
                                    </Button>
                                </Link>
                            </Slide>
                            <Slide
                                direction={align === "left" ? "right" : "left"}
                                in={isInView}
                                timeout={{
                                    enter: align === "left" ? 550 : 850,
                                }}
                            >
                                <Link
                                    underline="none"
                                    href={website}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Button endIcon={<FiArrowRight />}>
                                        Website
                                    </Button>
                                </Link>
                            </Slide>
                        </Box>
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <Link href={website} target="_blank" rel="noreferrer">
                            <img
                                ref={tilt}
                                src={background}
                                alt=""
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    padding: "1rem",
                                }}
                            />
                        </Link>
                    </Box>
                </Box>
            </Container>
        </InView>
    );
};

export default WebsitePreview;
