import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Carousel from "react-material-ui-carousel";
import { Grid } from "@mui/material";
import Zoom from "@mui/material/Zoom";

function ITCarousel(props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.images.length;

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
      <Zoom in={true} style={{ transitionDelay: "250ms" }}>
        <Box>
          <Paper
            sx={{ m: 2, backgroundColor: "#9dc53f", borderRadius: "16px" }}
            elevation={10}
          >
            <Carousel>
              {props.images.map((step, index) => (
                <Box
                  component="img"
                  sx={{
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    height: 405,
                    display: "block",
                    maxWidth: 2000,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ))}
            </Carousel>
          </Paper>
        </Box>
      </Zoom>
    </>
  );
}

export default ITCarousel;
