import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import ServiceCard from "../components/home/ServiceCard";
import Stack from "@mui/material/Stack";
import Zoom from "@mui/material/Zoom";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import TestimonialCarousel from "../components/home/TestimonialCarousel";

import Carousel from "../components/home/Carousel";
import { maxWidth } from "@mui/system";

const inter = Inter({ subsets: ["latin"] });
const images = [
  {
    label: "Physical Therapy",
    imgPath:
      "https://www.idealtherapy.net/wp-content/uploads/2022/03/physical-therapy1a.jpg",
  },
  {
    label: "Aquatic Therapy",
    imgPath:
      "https://www.idealtherapy.net/wp-content/uploads/2019/12/aquatic-therapy1.jpg",
  },
  {
    label: "Occupational Therapy",
    imgPath:
      "https://www.idealtherapy.net/wp-content/uploads/2022/03/occupational-therapy-1-1.jpg",
  },
  {
    label: "Speech Therapy",
    imgPath:
      "https://www.idealtherapy.net/wp-content/uploads/2022/03/speech-therapy1.jpg",
  },
  {
    label: "Massage Therapy",
    imgPath:
      "https://www.idealtherapy.net/wp-content/uploads/2022/03/massage-therapy.jpg",
  },
];

const serviceCards = [
  {
    name: "Physical Therapy",
    description: "Reduce pain, improve strength, balance and restore mobility.",
    queryParam: "/services?service=Physical%20Therapy",
  },
  {
    name: "Occupational Therapy",
    description: "Improve your ability to perform everyday tasks.",
    queryParam: "/services?service=Occupational%20Therapy",
  },
  {
    name: "Speech Therapy",
    description: "Improves communication and nutritional intake.",
    queryParam: "/services?service=Speech%20Therapy",
  },
  {
    name: "Aquatic Therapy",
    description: "Reduces the effects of gravity on joint & muscles.",
    queryParam: "/services?service=Other%20Services",
  },
  {
    name: "Massage Therapy",
    description: "Relieve the stress and tension of everyday living.",
    queryParam: "/services?service=Other%20Services",
  },
];

const testimonials = [
  "I felt better the day after my 1st visit. The instructional exercises that were given helped my pain to loosen up. Mrs. Corlette and Ideal were always professional and made my therapy enjoyable. As I continued my exercises and attended my appointments, my pain had decreased. This was so effective that I didn???t want to leave.",
  "From paralyzed to barely walking to out patient therapy at ideal therapy to walking 8 miles without a cane, you pushed me when I need to be pushed, you provided me with the tools I needed to get back on my feet, I loved coming to see you because after 2 strokes I knew you could get me back on my feet because God said so! I love you ladies!",
  "What can I say? Unbelievably caring that???s what. I was recommended to Ideal Therapy through the Veteran???s Choice program. This provider???s office followed up with me and I was very enthusiastic about being here on my first appointment. The therapist at Ideal are about whole body treatment and having chronic pain this is very important to me. Mrs. Cambridge and her staff make me smile on days I hurt and wish I could stay in bed. The staff at Ideal Therapy have gone above and beyond for me. I appreciate their community service and service to all of us Veterans of the U.S. military.",
  "Ideal Therapy has been wonderful in helping our family our recovery. We trust and highly recommend having them serve you.",
  "Therapist Luke-Cambridge, and the staff receptionist Patrice, PT Princess and masseuse Crystal are all just wonderful! This my first time I???ve had pt, and they have made it such a pleasure. Got a massage today and I must say it was the best one I???ve ever had. My physical therapist Princess is awesome, so friendly and patient. Patrice always greets you with a smile, and is very pleasant. Therapist Luke-Cambridge what a awesome facility you have???.. Thank you for making my visits so pleasurable. I would recommend anyone needing PT, SP, OT etc!!!!!! Just a wonderful place!!!!!!!!!",
  "Very satisfied client. The therapist had great hands and addressed all my discomforts during the massage session. Treat yourself to this very gratifying massage experience.",
];

export default function Home() {
  return (
    <>
      <Carousel images={images} />
      <Grid
        container
        sx={{ mt: 1 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Box sx={{ maxWidth: 1420 }}>
          <Zoom in={true} style={{ transitionDelay: "500ms" }}>
            <Paper elevation={10}>
              <Stack direction={"row"}>
                <Grid container xs={6} md={6}>
                  <Typography variant="h5">
                    <p>
                      Ideal Therapy, LLC has been offering high quality therapy
                      services since 2008. We provide Occupational, Speech,
                      Physical and Massage Therapy services. Some services are
                      rendered in Homes, Schools, Rehabilitative Facilities,
                      Nursing Homes, Our Patient Facilities, and other
                      institutions. We have provided superior service to our
                      clients and have assisted them in achieving their goals.
                    </p>
                    <br />
                    <p>
                      Our commitment to excellence has earned us the reputation
                      as one of the best health care providers in the area. We
                      believe in treating the whole person not just the
                      symptoms. As such we provide comprehensive rehabilitative
                      services that promotes healing and restoration of prior
                      functional abilities.
                    </p>
                    <br />
                    <p>
                      Our customized, goal-based treatment plans are designed to
                      produce measurable results based on your diagnosis,
                      expectations and needs.
                    </p>
                  </Typography>
                  <Divider orientation="vertical" flexItem />
                </Grid>

                <Grid xs={6} md={6}>
                  <CardMedia
                    component="img"
                    height="550"
                    image="https://www.idealtherapy.net/wp-content/uploads/2022/02/BOGA-2021.jpg"
                    alt="Best of Georgia Image"
                  />
                </Grid>
              </Stack>
            </Paper>
          </Zoom>
        </Box>
      </Grid>
      <Grid md={6} sm={6}>
        <Zoom in={true} style={{ transitionDelay: "750ms" }}>
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ServiceCard service={serviceCards[0]} />
            <ServiceCard service={serviceCards[1]} />
            <ServiceCard service={serviceCards[2]} />
          </Grid>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "1000ms" }}>
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ServiceCard service={serviceCards[3]} />
            <ServiceCard service={serviceCards[4]} />
          </Grid>
        </Zoom>
      </Grid>
      <TestimonialCarousel testimonials={testimonials} />
    </>
  );
}
