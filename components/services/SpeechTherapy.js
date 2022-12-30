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

export default function SpeechTherapy() {
  return (
    <Zoom in={true} style={{ transitionDelay: "250ms" }}>
      <Box sx={{ m: 2 }}>
        <Paper elevation={8} sx={{ backgroundColor: "#1bb2b0" }}>
          <Grid container spacing={2}>
            <Grid xs={6} md={6}>
              <Typography color="white" variant="h6">
                Speech Therapist also referred to as a Speech-language
                Pathologist can work with a diverse client group, including
                people with physical and learning disabilities, hearing
                loss/deafness, psychiatric disorders or dementia. ST evaluate
                and treat infants, children and adults who have various levels
                of impairment with:
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
                  <ListItem>Written language skills</ListItem>
                  <ListItem>Receptive language </ListItem>
                  <ListItem> Expressive language </ListItem>
                  <ListItem> Reading comprehension </ListItem>
                  <ListItem> Fluency </ListItem>
                  <ListItem> Voice </ListItem>
                  <ListItem> Cognitive communication </ListItem>
                  <ListItem> Attention </ListItem>
                  <ListItem> Memory and problem-solving disorders </ListItem>
                  <ListItem> Swallowing Difficulties </ListItem>
                  <ListItem>
                    Speech production (inappropriate pitch, harsh voice,
                    stuttering, speech rhythm)
                  </ListItem>
                </List>
              </Typography>
              <Divider orientation="vertical" flexItem />
            </Grid>

            <Grid xs={6} md={6}>
              <CardMedia
                component="img"
                height="500"
                image="https://www.idealtherapy.net/wp-content/uploads/2022/02/ST-DENISE-300x262.jpg"
                alt="Speech Therapy Image"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Zoom>
  );
}
