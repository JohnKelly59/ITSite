import * as React from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function ServiceCard(props) {
  const router = useRouter();
  return (
    <Paper elevation={10} sx={{ m: 2 }}>
      <Card sx={{ backgroundColor: "#Cfffca", maxWidth: 442, minHeight: 200 }}>
        <CardContent>
          <Typography variant="h4" component="div">
            {props.service.name}
          </Typography>

          <Typography variant="h5">{props.service.description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="large"
            onClick={() => {
              router.push(props.service.queryParam);
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
}
