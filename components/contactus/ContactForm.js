import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";
import { MuiTelInput } from "mui-tel-input";

export default function ContactForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.number.value);
  };
  const [phone, setPhone] = React.useState("");
  const handleChange = (newValue) => {
    console.log(newValue);
    setPhone(newValue);
  };
  return (
    <>
      <Zoom in={true} style={{ transitionDelay: "250ms" }}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 6, width: "55ch" },
          }}
          noValidate
          autoComplete="off"
          md={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Paper
            sx={{ m: 2, backgroundColor: "#9dc53f", borderRadius: "16px" }}
            elevation={3}
          >
            <Stack
              sx={{ m: 5 }}
              direction={"column"}
              spacing={2}
              textAlign="center"
            >
              <Typography variant={"h5"}>Contact Form</Typography>
              <TextField required id="name" label="Name" variant="outlined" />
              <TextField
                type="email"
                required
                id="email"
                label="Email"
                variant="outlined"
              />
              <MuiTelInput
                value={phone}
                onChange={handleChange}
                required
                id="number"
                label="Number"
                variant="outlined"
              />
              <TextField
                required
                multiline
                rows={5}
                id="message"
                label="Message"
                variant="outlined"
              />
              <Button type="submit" variant="outlined">
                Submit
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Zoom>
    </>
  );
}
