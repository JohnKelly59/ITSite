import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Zoom from "@mui/material/Zoom";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ptphoto from "../../public/images/kob.jpg"

export default function PhysicalTherapy() {
  return (
    <Zoom in={true} style={{ transitionDelay: "250ms" }}>
      <Box sx={{ m: 2 }}>
        <Paper elevation={8} sx={{ backgroundColor: "#1bb2b0", borderRadius: "16px" }}>
          <Grid container spacing={2}>
            <Grid xs={6} md={6}>
              <Typography color="white" variant="h5">
                <p>
                  Physical Therapists (PTs) and Physical Therapist Assistants
                  (PTAs) can teach patients how to prevent or manage their
                  condition so that they will achieve long-term health benefits.
                </p>
                <br />
                <p>
                  PTs examine individuals and develop a plan using treatment
                  techniques to promote the ability to move, reduce pain,
                  restore function, and prevent disability. In addition, PTs
                  work with individuals to prevent the loss of mobility before
                  it occurs by developing fitness and wellness-oriented programs
                  for healthier and more active lifestyles.
                </p>
                <br />
                <p>
                  Physical Therapy intervention can help patients reduce pain,
                  improve strength, balance and or restore mobility, in many
                  cases without expensive surgery and often reducing the need
                  for long-term use of prescription medications and their side
                  effects.
                </p>
              </Typography>
              <Divider orientation="vertical" flexItem />
            </Grid>

            <Grid xs={6} md={6}>
              <CardMedia
                component="img"
                height="500"
                image={ptphoto.src}
                sx={{borderRadius: "16px", paddingRight: "10px"}}
                alt="Physical Therapy Image"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Zoom>
  );
}
