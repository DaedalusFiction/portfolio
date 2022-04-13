import React, { useState } from "react";

import emailjs from "@emailjs/browser";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

import { BsArrowRight } from "react-icons/bs";

const EmailForm = () => {
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleEmailChange = (e) => {
        setEmailError(!ValidateEmail(e.target.value));
        setEmail(e.target.value);
    };

    const sendEmail = () => {
        var templateParams = {
            email: email,
        };

        emailjs
            .send(
                "service_tmo76bn",
                "template_pfang7n",
                templateParams,
                "aMDOy4kUud9rd0Yg9"
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    setEmailSent(true);
                },
                function (error) {
                    console.log("FAILED...", error);
                }
            );
    };

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true;
        }
        return false;
    }
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "0 .5em",
                }}
            >
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "35ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    {!emailSent && (
                        <TextField
                            id="outlined-basic"
                            label="Email Address"
                            variant="outlined"
                            color="primary"
                            sx={{ input: { color: "white" } }}
                            value={email}
                            onChange={handleEmailChange}
                            focused
                            error={emailError}
                        />
                    )}
                </Box>
                {!emailSent && (
                    <Button
                        variant="contained"
                        onClick={sendEmail}
                        endIcon={<BsArrowRight />}
                    >
                        Send
                    </Button>
                )}
                {emailSent && (
                    <Typography variant="p">
                        Thanks! I'll be in touch soon!
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default EmailForm;
