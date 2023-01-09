import * as React from "react";
import IndexCards from "../aboutus/IndexCards";
import Grid from "@mui/material/Unstable_Grid2";
import Zoom from "@mui/material/Zoom";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import abaphoto from "../../public/images/abaphoto.jpg"

export default function ABATherapy() {
  return (
    <Zoom in={true} style={{ transitionDelay: "250ms" }}>
      <Box sx={{ m: 2 }}>
        <Paper elevation={8}  sx={{ backgroundColor: "#1bb2b0", borderRadius: "16px" }}>
          <Grid container spacing={2}>
            <Grid xs={6} md={6}>
              <Typography color="white" variant="h5">
                <p>WHAT IS ABA THERAPY?</p>
              </Typography>

              <Typography color="white" variant="body6">
                ABA (Applied Behavior Analysis) therapy is an evidence-based
                therapy that focuses on improving, a wide variety of specific
                behaviors, such as communication, social skills, self-care,
                daily living skills (ADLS),and visual-motor integration. ABA
                therapy is an evidence-based approach for treatment of
                individuals with Autism and other developmental disabilities.
                Positive reinforcement is one of the main strategies used in
                ABA. The client is rewarded when a desired behavior is
                demonstrated. With rewards, the client is more likely to repeat
                that behavior. Over time, this encourages positive behavior
                change.
              </Typography>
              <Typography color="white" variant="h5"> How does ABA therapy work? </Typography>
              <Typography color="white" variant="body6">
                <List
                  sx={{
                    listStyleType: "disc",
                    pl: 3,
                    "& .MuiListItem-root": {
                      display: "list-item",
                    },
                  }}
                  dense={true}
                >
                  <ListItem>
                    Provided in many different locations – at home, at school,
                    daycare, clinic and in the community
                  </ListItem>
                  <ListItem>
                    Teaches skills that are useful in everyday life
                  </ListItem>
                  <ListItem>
                    Can involve one-to-one teaching or group instruction
                  </ListItem>
                  <ListItem>
                    Parent/caregiver training for better carryover
                  </ListItem>
                </List>
              </Typography>

              <Typography color="white" variant="h5">
                The overall goal is to improve the client’s ability to:
              </Typography>
              <Typography color="white" variant="body6">
                <List
                  sx={{
                    listStyleType: "disc",
                    pl: 3,
                    "& .MuiListItem-root": {
                      display: "list-item",
                    },
                  }}
                  dense={true}
                >
                  <ListItem>Increase socially accepted behaviors</ListItem>
                  <ListItem>Improve language and communication skills</ListItem>
                  <ListItem>
                    Improve attention, focus, memory, and academic skills
                  </ListItem>
                  <ListItem>
                    Improve self-care (such as toileting, dressing and showers)
                  </ListItem>
                  <ListItem>Improve Play & leisure</ListItem>
                  <ListItem>Improve motor skills</ListItem>
                  <ListItem>
                    Decrease problem behaviors such as self-injury, aggression,
                    tantrums, and/or property destruction.
                  </ListItem>
                </List>
              </Typography>
              <Divider orientation="vertical" flexItem />
            </Grid>

            <Grid xs={6} md={6}>
              <CardMedia
                component="img"
                height="700"
                image={abaphoto.src}
                sx={{borderRadius: "16px", paddingRight: "10px"}}
                alt="ABA Therapy"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Zoom>
  );
}
