import { Card, CardContent, CardMedia, Fade, Typography } from "@mui/material";
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
            >
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={photo}
                        alt="javascript code"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Fade>
        </InView>
    );
};

export default InfoCard;
