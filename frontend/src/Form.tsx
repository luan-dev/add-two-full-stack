import * as React from "react";
import { useState } from "react";
import axios from "axios";

import { Stack, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// we do not allow non-numeric characters
const NUM_REGEX = /[^0-9-.]/;

const Form = () => {
    // state handling
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const handleNum1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        let num = e.target.value;
        num = num.replace(NUM_REGEX, "");
        setNum1(num);
    };
    const handleNum2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        let num = e.target.value;
        num = num.replace(NUM_REGEX, "");
        setNum2(num);
    };

    // submit handling
    const handleClick = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios
            .get(`http://localhost:8080/add?nums=${num1}&nums=${num2}`)
            .then((res) => {
                alert(res.data.total);
            })
            .catch((err) => {
                alert(err.response.data.error);
            });
    };

    return (
        <Paper elevation={5}>
            <Card variant="outlined" sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography gutterBottom component="div" align="center">
                        <strong>Add Two Numbers</strong>
                    </Typography>
                    <Stack spacing={1}>
                        <TextField
                            id="num1"
                            size="small"
                            placeholder="First Number"
                            value={num1}
                            onChange={handleNum1Change}
                        />
                        <TextField
                            id="num2"
                            size="small"
                            placeholder="Second Number"
                            value={num2}
                            onChange={handleNum2Change}
                        />
                    </Stack>
                </CardContent>
                <CardActions
                    disableSpacing
                    style={{ justifyContent: "center" }}
                >
                    <Button variant="contained" onClick={handleClick}>
                        Calculate
                    </Button>
                </CardActions>
            </Card>
        </Paper>
    );
};

export default Form;
