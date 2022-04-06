import {
    Box,
    Typography,
    Container,
    Button,
    Grow,
    Slide,
    Fade,
    Link,
} from "@mui/material";
import earth from "../assets/images/earth.jpg";
import React, { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { darkTheme } from "../assets/themes/primaryTheme";

const Hero = () => {
    const [checked, setChecked] = useState(true);
    const heroDescriptionRef = useRef(null);
    return (
        <Box
            sx={{
                // backgroundImage: `url(${earth})`,
                backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.4), rgba(0, 0, 0, 0.8)),
  url(${earth})`,
                backgroundSize: "cover",
                padding: "20vw 0 10vw 0",
            }}
        >
            <Container>
                <Fade
                    in={checked}
                    direction="right"
                    timeout={{
                        enter: 1000,
                    }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{ color: "white", fontSize: "4rem" }}
                        gutterBottom
                    >
                        Hello! I'm David Sorensen
                    </Typography>
                </Fade>

                <Box ref={heroDescriptionRef} sx={{ overflow: "hidden" }}>
                    <Slide
                        in={checked}
                        direction="up"
                        timeout={{
                            enter: 1000,
                        }}
                        container={heroDescriptionRef.current}
                    >
                        <Box>
                            <Typography
                                variant="p"
                                sx={{ color: "var(--color-primary)" }}
                            >
                                A Full-Stack Web Developer based in
                                Charlottesville, Virginia
                            </Typography>
                        </Box>
                    </Slide>
                </Box>
                <Box
                    sx={{
                        padding: "2em 0",
                        display: "flex",
                        gap: "1em",
                        overflow: "hidden",
                    }}
                >
                    <Slide direction="right" in={true} timeout={750}>
                        <Link
                            href="https://github.com/DaedalusFiction"
                            target="_blank"
                            rel="noreferrer"
                            underline="none"
                        >
                            <Button
                                sx={{ fontSize: "1.2rem" }}
                                endIcon={<FiArrowRight />}
                            >
                                Portfolio
                            </Button>
                        </Link>
                    </Slide>
                    <Slide direction="right" in={true} timeout={350}>
                        <Link
                            href="https://github.com/DaedalusFiction"
                            target="_blank"
                            rel="noreferrer"
                            underline="none"
                        >
                            <Button
                                sx={{ fontSize: "1.2rem" }}
                                endIcon={<FiArrowRight />}
                            >
                                Github
                            </Button>
                        </Link>
                    </Slide>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
