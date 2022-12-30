import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Grid } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Carousel from "react-material-ui-carousel";

function TestimonialCarousel(props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.testimonials.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Zoom in={true} style={{ transitionDelay: "1250ms" }}>
        <Paper
          elevation={10}
          sx={{ m: 2, backgroundColor: "#1bb2b0", borderRadius: "16px" }}
        >
          <Carousel>
            {props.testimonials.map((step, index) => (
              <Box
                sx={{
                  height: 405,
                  display: "block",
                  maxWidth: 2000,
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                <Typography
                  color="white"
                  sx={{ m: 2 }}
                  display="flex"
                  justifyContent="center"
                  variant="h4"
                >
                  {"Testimonials"}
                </Typography>
                <Typography
                  color="white"
                  sx={{ mt: 10 }}
                  display="flex"
                  justifyContent="center"
                  variant="h6"
                >
                  {step}
                </Typography>
              </Box>
            ))}
          </Carousel>
        </Paper>
      </Zoom>
    </>
  );
}

export default TestimonialCarousel;
