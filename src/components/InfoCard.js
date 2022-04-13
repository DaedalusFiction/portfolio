import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Fade,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { InView } from "react-intersection-observer";

const InfoCard = ({ title, photo, description, delay }) => {
    const [isInView, setIsInView] = useState(false);
    return (
        <InView as="div" onChange={(inView, entry) => setIsInView(inView)}>
            <Fade
                in={isInView}
                direction="up"
                timeout={{
                    enter: delay,
                }}
                sx={{ display: "flex", justifyContent: "center" }}
            >
                <Box>
                    <Card
                        sx={{
                            maxWidth: 345,
                            backgroundColor: "#000000",
                            border: "1px solid var(--color-primary-dark)",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="140"
                            image={photo}
                            alt="javascript code"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "white",
                                    fontWeight: "bold",
                                }}
                            >
                                {title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "white" }}>
                                {description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Fade>
        </InView>
    );
};

export default InfoCard;
