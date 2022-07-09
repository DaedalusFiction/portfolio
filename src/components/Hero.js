import {
    Box,
    Typography,
    Container,
    Button,
    Grow,
    Slide,
    Fade,
} from "@mui/material";
import earth from "../assets/images/backgrounds/earth.jpg";
import React, { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = () => {
    const [checked, setChecked] = useState(true);
    const heroDescriptionRef = useRef(null);
    return (
        <Box
            sx={{
                // backgroundImage: `url(${earth})`,
                backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.4), rgba(23, 23, 23, 1)),
  url(${earth})`,
                backgroundAttachment: "fixed",
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
                        flexWrap: "wrap",
                    }}
                >
                    <Slide direction="right" in={true} timeout={750}>
                        <Link to="/portfolio">
                            <Button endIcon={<FiArrowRight />}>
                                Portfolio
                            </Button>
                        </Link>
                    </Slide>
                    <Slide direction="right" in={true} timeout={350}>
                        <div>
                            <Button
                                href="https://github.com/DaedalusFiction"
                                target="_blank"
                                rel="noreferrer"
                                endIcon={<FiArrowRight />}
                            >
                                Github
                            </Button>
                        </div>
                    </Slide>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
