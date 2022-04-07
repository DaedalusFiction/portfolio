import { Box, Icon, Container, Button } from "@mui/material";
import React from "react";

const TechIconCard = ({ path }) => {
    const pathId = path.substr(0, 10).split(" ").join("");

    return (
        <Container>
            <Button
                onClick={() => {
                    console.log(pathId);
                }}
            >
                click
            </Button>
            <Box
                style={{
                    width: "5em",
                    height: "5em",
                    background:
                        "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    clipPath: `url(#${pathId})`,
                }}
            />
            <svg width="0" height="0">
                <clipPath id={pathId} clipPathUnits="objectBoundingBox">
                    <path d={path}></path>
                </clipPath>
            </svg>
        </Container>
    );
};

export default TechIconCard;
