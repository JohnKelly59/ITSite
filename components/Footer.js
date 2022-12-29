import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkIcon from "@mui/icons-material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import { experimentalStyled as styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function Footer({ props }) {
  return (
    <>
      <Box>
        <Grid justifyContent="center" container spacing={2}>
          <Grid xs={6} md={6}>
            <Card sx={{ backgroundColor: "#Cfffca" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fayetteville
                </Typography>
                <Stack justifyContent="center" direction="row" spacing={2}>
                  <Typography variant="body2" color="text.secondary">
                    <BusinessIcon /> : 290 Hwy 314, Suite B Fayetteville, GA
                    30214
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <LocalPhoneIcon /> : 404.994.7727
                  </Typography>
                </Stack>
                <Stack justifyContent="center" direction="row" spacing={2}>
                  <Typography variant="body2" color="text.secondary">
                    <EmailIcon /> : info@idealtherapy.net
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <FaxIcon /> : 404.994.7728
                  </Typography>
                </Stack>
              </CardContent>
              <Grid justifyContent="center" container>
                <CardActions>
                  <Button
                    size="small"
                    to="#"
                    onClick={(e) => {
                      window.location.href = "tel:404.994.7727";
                      e.preventDefault();
                    }}
                  >
                    Call
                  </Button>
                  <Button
                    size="small"
                    to="#"
                    onClick={(e) => {
                      window.location.href = "mailto:info@idealtherapy.net";
                      e.preventDefault();
                    }}
                  >
                    Email
                  </Button>
                  <Button
                    size="small"
                    to="#"
                    onClick={(e) => {
                      window.location.href = "fax:404.994.7728";
                      e.preventDefault();
                    }}
                  >
                    Fax
                  </Button>
                  <Button
                    size="small"
                    to="#"
                    onClick={(e) => {
                      window.location.href =
                        "https://www.google.co.in/maps/place/Ideal+Therapy/@33.4751604,-84.4521877,17z/data=!3m1!4b1!4m5!3m4!1s0x88f4efe8eb6d0093:0x58dd76c3a1781cce!8m2!3d33.4751604!4d-84.449999?hl=en";
                      e.preventDefault();
                    }}
                  >
                    Directions
                  </Button>
                </CardActions>
              </Grid>
            </Card>
          </Grid>
          <Grid xs={6} md={6}>
            <Card sx={{ backgroundColor: "#Cfffca" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Riverdale
                </Typography>
                <Stack justifyContent="center" direction="row" spacing={2}>
                  <Typography variant="body2" color="text.secondary">
                    <BusinessIcon /> : 6572 River Park Dr Suite101 Riverdale, GA
                    30274
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <LocalPhoneIcon /> : 678.626.1833
                  </Typography>
                </Stack>
                <Stack justifyContent="center" direction="row" spacing={2}>
                  <Typography variant="body2" color="text.secondary">
                    <EmailIcon /> : info@idealtherapy.net
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <FaxIcon /> : 678.626.1844
                  </Typography>
                </Stack>
              </CardContent>
              <Grid justifyContent="center" container>
                <CardActions>
                  <Button
                    size="small"
                    to="#"
                    onClick={(e) => {
                      window.location.href = "tel:678.626.1833";
                      e.preventDefault();
                    }}
                  >
                    Call
                  </Button>
                  <Button
                    size="small"
                    to="#"
                    onClick={(e) => {
                      window.location.href = "mailto:info@idealtherapy.net";
                      e.preventDefault();
                    }}
                  >
                    Email
                  </Button>
                  <Button
                    size="small"
                    to="#"
                    onClick={(e) => {
                      window.location.href = "fax:678.626.1844";
                      e.preventDefault();
                    }}
                  >
                    Fax
                  </Button>
                  <Button
                    size="small"
                    to="#"
                    onClick={(e) => {
                      window.location.href =
                        "https://goo.gl/maps/eyGyRturam5n8ffN9";
                      e.preventDefault();
                    }}
                  >
                    Directions
                  </Button>
                </CardActions>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Paper elevation={2}>
          <Grid xs={12} md={12}>
            <Stack justifyContent="center" direction="row" spacing={2}>
              <IconButton
                size="large"
                color="inherit"
                href="https://www.facebook.com/Idealtherapy/"
              >
                <FacebookRoundedIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
                href="https://twitter.com/idealtherapy"
              >
                <TwitterIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
                href="https://www.yelp.com/biz/ideal-therapy-fayetteville"
              >
                <LinkIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
                href="https://www.google.com/search?q=%E2%80%8BIdeal+Therapy%2C+LLC+290+Hwy+314%2C+Suite+B+Fayetteville%2C+GA+30214&rlz=1C1CHBF_enIN850IN850&oq=%E2%80%8BIdeal+Therapy%2C+LLC+290+Hwy+314%2C+Suite+B+Fayetteville%2C+GA+30214&aqs=chrome..69i57j69i61l2j69i60.287j0j7&sourceid=chrome&ie=UTF-8#lrd=0x88f4efe8eb6d0093:0x58dd76c3a1781cce,1,,,"
              >
                <GoogleIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Stack>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}
