import * as React from "react";
import IndexCards from "./IndexCards";
import Grid from "@mui/material/Unstable_Grid2";
import Zoom from "@mui/material/Zoom";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import logo from "../../public/images/ideal_therapy_logo.jpg"
import ourcorevalues from "../../public/images/ourcorevalues.jpg"
import ourmission from "../../public/images/ourmission.jpg"
import ourvision from "../../public/images/ourvision.jpg"
import aboutuspic from "../../public/images/aboutuspic.jpg"

export default function Overview() {
  let aboutUs = {
    title: "About Us",
    body: "Ideal Therapy staff creates a family environment to improve your experience as we service you. We take the time to know who you are to create a personalized treatment plan.",
    img: aboutuspic,
    backgroundColor: "#9dc53f",
  };

  let ourMission = {
    title: "Our Mission",
    body: "Our mission is to provide outstanding client experience by offering individualized evidence-based care available, that promotes everyone to achieve and maintain the highest quality of life. ",
    img: ourmission,
    backgroundColor: "#1bb2b0",
  };

  let ourVision = {
    title: "Our Vision",
    body: "We believe in educating our patient family during their rehab journey to further improve long term recovery. We do so by consistently advancing our education & training.",
    img: ourvision,
    backgroundColor: "#9dc53f",
  };

  let ourCoreValues = {
    title: "Our Core Values",
    body: "List",
    img: ourcorevalues,
    backgroundColor: "#1bb2b0",
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Zoom in={true} style={{ transitionDelay: "250ms" }}>
          <Grid xs={4}>
            <IndexCards data={aboutUs} />
          </Grid>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "500ms" }}>
          <Grid xs={4}>
            <IndexCards data={ourMission} />
          </Grid>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "750ms" }}>
          <Grid xs={4}>
            <IndexCards data={ourVision} />
          </Grid>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "1000ms" }}>
          <Grid xs={12}>
            <Box sx={{ m: 2 }}>
              <Paper elevation={8} sx={{ borderRadius: "16px", backgroundColor: "#1bb2b0" }}>
                <CardHeader
                  avatar={
                    <Avatar
                      alt="Ideal Therapy"
                      src={logo.src}
                    />
                  }
                  title={<Typography color="white">{ourCoreValues.title}</Typography>}
                />
                <Grid container spacing={2}>
                  <Grid xs={6} md={6}>
                    <CardMedia
                      component="img"
                      height="320"
                      sx={{borderRadius: "16px", paddingRight: "10px"}}
                      image={ourCoreValues.img.src}
                      alt="Physical Therapy Image"
                    />
                  </Grid>
                  <Grid xs={6} md={6}>
                    <Typography color="white" variant="h6">
                      Ideal Therapy aspires to uphold these core values to:{" "}
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
                        <ListItem>
                          Provide service with empathy and caring to all
                        </ListItem>
                        <ListItem>
                          Our patient care is designed to provide the tool in
                          which pt can proactively participate in their
                          rehabilitation.
                        </ListItem>
                        <ListItem>
                          We strive to provide a unique patient experience that
                          exceeds all expectations.
                        </ListItem>
                        <ListItem>
                          Create a nurturing environment, where patient become
                          part of our clinical family.
                        </ListItem>
                        <ListItem>Improve Play & leisure</ListItem>
                        <ListItem>Improve motor skills</ListItem>
                        <ListItem>
                          Provide an empathetic and compassionate service to all
                        </ListItem>
                      </List>
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
        </Zoom>
      </Grid>
    </div>
  );
}
