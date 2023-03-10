import * as React from "react";
import IndexCards from "../aboutus/IndexCards";
import Grid from "@mui/material/Unstable_Grid2";
import Zoom from "@mui/material/Zoom";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function OtherServices() {
  return (
    <>
      <Zoom in={true} style={{ transitionDelay: "250ms" }}>
        <Box sx={{ m: 2 }}>
          <Paper elevation={8}>
            <Grid container spacing={2}>
              <Grid xs={6} md={6}>
                <Typography variant="h5">
                  <strong>Massage Therapy</strong>
                </Typography>
                <br />
                <Typography variant="subtitle1">
                  <p>
                    Massage Therapy: Licensed Massage Therapist (LMT): Massage
                    Therapy is an accepted component of physical rehabilitation
                    programs. It is the manipulation of superficial and deeper
                    layers of muscle and connective tissue using various
                    techniques, to enhance function, aid in the healing process,
                    decrease muscle reflex activity, inhibit motor-neuron
                    excitability, promote relaxation and well-being.
                  </p>
                  <br />
                  <p>
                    It is also proven beneficial for many chronic conditions,
                    and it promotes relaxation. Massage also helps relieve the
                    stress and tension of everyday living that can lead to many
                    illnesses such as lower back pain, arthritis, bursitis,
                    fatigue and high blood pressure.
                  </p>
                </Typography>
                <Divider orientation="vertical" flexItem />
              </Grid>

              <Grid xs={6} md={6}>
                <CardMedia
                  component="img"
                  height="350"
                  image="https://www.idealtherapy.net/wp-content/uploads/2022/02/ideal-massageTherapy.jpg"
                  alt="Massage Therapy Image"
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Zoom>
      <Zoom in={true} style={{ transitionDelay: "500ms" }}>
        <Box sx={{ m: 2 }}>
          <Paper elevation={8}>
            <Grid container spacing={2}>
              <Grid xs={6} md={6}>
                <Typography variant="h5">
                  <strong>Aquatic Therapy</strong>
                </Typography>
                <br />
                <Typography variant="subtitle1">
                  <p>
                    Water???s natural properties create an Ideal therapeutic
                    environment: Warm water provides a relaxing and soothing
                    environment for aching joints and muscles.
                  </p>
                  <br />
                  <p>
                    The Buoyancy allows for flotation thus reducing the effects
                    of gravity on injured or aching joints and muscles. This
                    allows improved exercise and weight bearing tolerance as
                    compared to land activities
                  </p>
                </Typography>
                <Divider orientation="vertical" flexItem />
              </Grid>

              <Grid xs={6} md={6}>
                <CardMedia
                  component="img"
                  height="350"
                  image="https://www.idealtherapy.net/wp-content/uploads/2019/08/aquatic-therapy.jpg"
                  alt="Aquatic Therapy Image"
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Zoom>
    </>
  );
}
