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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import dayjs from "dayjs";

export default function AppointmentForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.number.value);
  };
  const [phone, setPhone] = React.useState("");
  const handlePhoneChange = (newValue) => {
    console.log(newValue);
    setPhone(newValue);
  };

  const [dateValue, setDateValue] = React.useState(dayjs());

  const handleDateChange = (newValue) => {
    setDateValue(newValue);
  };
  const [timeValue, setTimeValue] = React.useState("");

  const handleTimeChange = (newValue) => {
    setTimeValue(newValue.target.value);
  };

  const [insuranceValue, setInsuranceValue] = React.useState("");

  const handleInsuranceChange = (newValue) => {
    setInsuranceValue(newValue.target.value);
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
              <FormControl required fullWidth>
                <InputLabel id="appointmentTime">Service Request</InputLabel>

                <Select
                  labelId="appointmentTime"
                  id="appointmentTime"
                  value={timeValue}
                  label="Appointment Time"
                  onChange={handleTimeChange}
                >
                  <MenuItem value={"Physical Therapy"}>
                    Physical Therapy
                  </MenuItem>
                  <MenuItem value={"Occupational Therapy"}>
                    Occputaional Therapy
                  </MenuItem>
                  <MenuItem value={"Speech Therapy"}>Speech Therapy</MenuItem>
                  <MenuItem value={"Aquatic Therapy"}>Aquatic Therapy</MenuItem>
                  <MenuItem value={"ABA Therapy"}>ABA Therapy</MenuItem>
                  <MenuItem value={"Massage Therapy"}>Massage Therapy</MenuItem>
                </Select>
              </FormControl>
              <FormControl required fullWidth>
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
                  <MenuItem value={"Secure Horizons"}>Secure Horizons</MenuItem>
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
                  <MenuItem value={"Other Insurance"}>Other Insurance</MenuItem>
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
      </Zoom>
    </>
  );
}
