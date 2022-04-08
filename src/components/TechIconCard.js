import { Box, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const TechIconCard = ({ path }) => {
    const pathId = path.substr(0, 10).split(" ").join("");
    const [d, setD] = useState("");

    useEffect(() => {
        async function getPath() {
            const resp = await fetch(`./svgs/${path}.svg`);
            // console.log(await resp.text());
            const parser = new DOMParser();
            const svg = parser.parseFromString(
                await resp.text(),
                "image/svg+xml"
            );
            // console.log(svg);
            const pathNode = svg.querySelector("path");
            // console.log(path);
            setD(pathNode.getAttribute("d"));
        }
        getPath();
    }, [path]);

    return (
        <Container>
            <Box
                style={{
                    width: "5rem",
                    height: "5rem",
                    background:
                        "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    clipPath: `url(#${pathId})`,
                }}
            />
            <svg width="0" height="0">
                <clipPath id={pathId} clipPathUnits="objectBoundingBox">
                    <path d={d}></path>
                </clipPath>
            </svg>
        </Container>
    );
};

export default TechIconCard;
