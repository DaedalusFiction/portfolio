import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import React from "react";
import Hero from "../components/Hero";
import code3 from "../assets/images/code3.jpg";
import code2 from "../assets/images/code2.jpg";
import chip from "../assets/images/chip.jpg";

const Home = () => {
    return (
        <Box>
            <Hero />
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={code2}
                                alt="javascript code"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Responsive
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    I design my websites mobile-first, so that
                                    you can reach the widest demographic
                                    possible and thrive in the modern market
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={chip}
                                alt="red computer chip"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Secure
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    I handle authentication and authorization
                                    with Google's OAuth 2.0, the internet's most
                                    used and trusted authentication service
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={code3}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Reliable
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    My websites store important data in Google's
                                    cloud service, Firebase, so that your data
                                    is always restorable in case something
                                    happens
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;
