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
import pelvicFloor from "../../public/images/Pelvic-floor.png";

export default function PelvicFloorTherapy() {
  return (
    <Zoom in={true} style={{ transitionDelay: "250ms" }}>
      <Box sx={{ m: 2 }}>
        <Paper
          elevation={8}
          sx={{ backgroundColor: "#1bb2b0", borderRadius: "16px" }}
        >
          <Grid container spacing={2}>
            <Grid xs={6} md={6}>
              <Typography color="white" variant="h6">
                Pelvic floor therapy involves assessing pelvic floor
                musculature, nerve, and other involved musculoskeletal regions.
                Assessment and treatment can be either internally or externally
                to improve pelvic floor muscle dysfunction. The overall goal is
                to manually guide a patient to tighten or loosen the
                dysfunctional muscle in order to improve tone and function. The
                muscles at the bottom of the pelvis helps to controls bowel &
                bladder function, stabilize the lower back and abdominal
                muscles, and supports the pelvic organs and sexual function/
                orgasm. Treatment is done for both women and men.
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
                  PELVIC FLOOR DYSFUNCTION CAN BE RELATED TO:
                  <ListItem>IBS</ListItem>
                  <ListItem>Hip pain </ListItem>
                  <ListItem> Back pain </ListItem>
                  <ListItem> Constipation</ListItem>
                  <ListItem>Dysmenorrhea</ListItem>
                  <ListItem> Gynecological surgery </ListItem>
                  <ListItem> Sexual dysfunction </ListItem>
                  <ListItem>And More!</ListItem>
                </List>
              </Typography>
              <Divider orientation="vertical" flexItem />
            </Grid>

            <Grid xs={6} md={6}>
              <CardMedia
                component="img"
                height="650"
                image={pelvicFloor.src}
                sx={{ borderRadius: "16px", paddingRight: "10px" }}
                alt="Speech Therapy Image"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Zoom>
  );
}
