import * as React from "react";
import IndexCards from "../aboutus/IndexCards";
import Grid from "@mui/material/Unstable_Grid2";
import Zoom from "@mui/material/Zoom";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import otphoto from "../../public/images/OT- KAYLA.jpg"

export default function OccupationalTherapy() {
  return (
    <Zoom in={true} style={{ transitionDelay: "250ms" }}>
      <Box sx={{ m: 2 }}>
        <Paper elevation={8} sx={{ backgroundColor: "#1bb2b0", borderRadius: "16px" }}>
          <Grid container spacing={2}>
            <Grid xs={6} md={6}>
              <Typography color="white" variant="h5">
                <p>
                  Occupational Therapist (OT) and Certified Occupational
                  Therapist Assistant (COTA) leads patients to improve
                  independence with activities of daily living. They utilize a
                  variety of methods and adaptive equipment that aids with
                  treatment plans that focus on controlling pain, swelling, and
                  abnormal sensitivity, as well as restoring strength, mobility,
                  coordination, endurance and everyday skills for a wide range
                  of age groups and diagnoses.
                </p>
                <br />
                <p>
                  Treatments are designed to improve the ability to perceive,
                  desire, recall, plan and carry out roles, routines, tasks and
                  subtasks for the purpose of self-maintenance, productivity,
                  leisure and rest in response to demands of the internal and/or
                  external environment.
                </p>
                <br />
                <p>
                  Our rehabilitation services keep patients moving forward, so
                  they can return to day-to-day work and recreational activities
                  and remain at their optimal health without further risk of
                  injury.
                </p>
              </Typography>
              <Divider orientation="vertical" flexItem />
            </Grid>

            <Grid xs={6} md={6}>
              <CardMedia
                sx={{borderRadius: "16px", paddingRight: "10px"}}
                component="img"
                height="500"
                image={otphoto.src}
                alt="Occupational Therapy Image"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Zoom>
  );
}
