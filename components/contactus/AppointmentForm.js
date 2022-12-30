import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MuiTelInput } from "mui-tel-input";
import emailjs from "@emailjs/browser";
import { SuccessAlert, FailureAlert } from "../Alerts";

export default function AppointmentForm(props) {
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [failureOpen, setFailureOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessOpen(false);
    setFailureOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let template = {
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.number.value,
      message: e.target.message.value,
      serviceRequest: serviceValue,
      insurance: insuranceValue,
    };

    emailjs
      .send(
        "service_ulbsev4",
        "template_6dskuie",
        template,
        "JjtNNxBts-8mfP1NA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessOpen(true);
        },
        (error) => {
          console.log(error.text);
          setFailureOpen(true);
        }
      );
  };

  const [phone, setPhone] = React.useState("");
  const handlePhoneChange = (newValue) => {
    console.log(newValue);
    setPhone(newValue);
  };

  const [serviceValue, setServiceValue] = React.useState("");

  const handleServiceChange = (newValue) => {
    setServiceValue(newValue.target.value);
  };

  const [insuranceValue, setInsuranceValue] = React.useState("");

  const handleInsuranceChange = (newValue) => {
    setInsuranceValue(newValue.target.value);
  };

  return (
    <>
      <SuccessAlert open={successOpen} handleClose={handleClose} />
      <FailureAlert open={failureOpen} handleClose={handleClose} />
      <Zoom in={true} style={{ transitionDelay: "250ms" }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box
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
                <Typography variant={"h5"}>Request an Appointment</Typography>
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
                  onChange={handlePhoneChange}
                  required
                  id="number"
                  label="Number"
                  variant="outlined"
                />
                <FormControl id="serviceRequest" required fullWidth>
                  <InputLabel id="serviceRequest">Service Request</InputLabel>
                  <Select
                    required
                    labelId="serviceRequest"
                    id="serviceRequest"
                    value={serviceValue}
                    label="Service Request"
                    onChange={handleServiceChange}
                  >
                    <MenuItem value={"Physical Therapy"}>
                      Physical Therapy
                    </MenuItem>
                    <MenuItem value={"Occupational Therapy"}>
                      Occputaional Therapy
                    </MenuItem>
                    <MenuItem value={"Speech Therapy"}>Speech Therapy</MenuItem>
                    <MenuItem value={"Aquatic Therapy"}>
                      Aquatic Therapy
                    </MenuItem>
                    <MenuItem value={"ABA Therapy"}>ABA Therapy</MenuItem>
                    <MenuItem value={"Massage Therapy"}>
                      Massage Therapy
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl id="insurance" required fullWidth>
                  <InputLabel id="insurance">Insurance</InputLabel>

                  <Select
                    labelId="insurance"
                    id="insurance"
                    value={insuranceValue}
                    label="Insurance"
                    onChange={handleInsuranceChange}
                  >
                    <MenuItem value={"1199"}>1199</MenuItem>
                    <MenuItem value={"AARP"}>AARP</MenuItem>
                    <MenuItem value={"Aetna"}>Aetna</MenuItem>
                    <MenuItem value={"Cigna"}>Cigna</MenuItem>
                    <MenuItem value={"Empire BC/BS"}>Empire BC/BS</MenuItem>
                    <MenuItem value={"Healthnet"}>Healthnet</MenuItem>
                    <MenuItem value={"Horizon BC/BS of NJ"}>
                      Horizon BC/BS of NJ
                    </MenuItem>
                    <MenuItem value={"Medicare"}>Medicare</MenuItem>
                    <MenuItem value={"MPN"}>MPN</MenuItem>
                    <MenuItem value={"Multiplan"}>Multiplan</MenuItem>
                    <MenuItem value={"No Fault"}>No Fault</MenuItem>
                    <MenuItem value={"Oxford"}>Oxford</MenuItem>
                    <MenuItem value={"PHCS"}>PHCS</MenuItem>
                    <MenuItem value={"Railroad Medicare"}>
                      Railroad Medicare
                    </MenuItem>
                    <MenuItem value={"Secure Horizons"}>
                      Secure Horizons
                    </MenuItem>
                    <MenuItem value={"Self Pay"}>Self Pay</MenuItem>
                    <MenuItem value={"Tricare"}>Tricare</MenuItem>
                    <MenuItem value={"United Health Care"}>
                      United Health Care
                    </MenuItem>
                    <MenuItem value={"United Healthcare PO Box 740800"}>
                      United Healthcare PO Box 740800
                    </MenuItem>
                    <MenuItem value={"Workers Compensation"}>
                      Workers Compensation
                    </MenuItem>
                    <MenuItem value={"Other Insurance"}>
                      Other Insurance
                    </MenuItem>
                    <MenuItem value={"No Insurance"}>No Insurance</MenuItem>
                  </Select>
                </FormControl>
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
        </form>
      </Zoom>
    </>
  );
}
