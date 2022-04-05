import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Collapse,
    Fade,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { InView } from "react-intersection-observer";

const InfoCardHorizontal = ({ title, description, delay }) => {
    const [isInView, setIsInView] = useState(false);

    return (
        <InView as="div" onChange={(inView, entry) => setIsInView(inView)}>
            <Collapse
                in={isInView}
                orientation="horizontal"
                timeout={{
                    enter: delay,
                }}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "1em",
                }}
            >
                <Box sx={{ display: "flex" }}>
                    <Card
                        sx={{
                            minWidth: "10em",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "1px solid var(--color-primary-dark)",
                            borderRadius: "3px 0 0 3px",
                        }}
                    >
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                padding: "1em",
                            }}
                        >
                            {title}
                        </Typography>
                    </Card>

                    <Box
                        sx={{
                            display: "flex",
                            width: "100%",
                            borderTop: "1px solid var(--color-primary)",
                            borderRight: "1px solid var(--color-primary)",
                            borderBottom: "1px solid var(--color-primary)",
                        }}
                    >
                        <Typography
                            variant="p"
                            color="primary"
                            sx={{ padding: "1em" }}
                        >
                            {description}
                        </Typography>
                    </Box>
                </Box>
            </Collapse>
        </InView>
    );
};

export default InfoCardHorizontal;
