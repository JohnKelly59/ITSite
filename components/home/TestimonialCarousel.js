import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Grid } from "@mui/material";
import Zoom from "@mui/material/Zoom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
        <Grid md={3} display="flex" justifyContent="center" alignItems="center">
          <Paper elevation={10} sx={{ m: 2 }}>
            <Box sx={{ maxWidth: 1400, flexGrow: 1 }}>
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {props.testimonials.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
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
                          sx={{ m: 2 }}
                          display="flex"
                          justifyContent="center"
                          variant="h4"
                        >
                          {"Testimonials"}
                        </Typography>
                        <Typography
                          sx={{ mt: 10 }}
                          display="flex"
                          justifyContent="center"
                          variant="h6"
                        >
                          {step}
                        </Typography>
                      </Box>
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
            </Box>
          </Paper>
        </Grid>
      </Zoom>
    </>
  );
}

export default TestimonialCarousel;
