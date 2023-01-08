import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import ITDialog from "./ITDialog";
import logo from "../../public/images/ideal_therapy_logo.jpg"

export default function IndexCards(props) {
  const { loading = false } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      sx={{
        maxWidth: 600,
        m: 1,
        backgroundColor: props.data.backgroundColor,
        borderRadius: "16px",
      }}
    >
      <CardHeader
       
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar
              alt="Ideal Therapy"
              src={logo.src}
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="dialog" onClick={handleClickOpen}>
              <MoreVertIcon sx={{color : props.data.backgroundColor === "#1bb2b0" && "white" }}/>
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
           
           <Typography color={props.data.backgroundColor === "#1bb2b0" && "white" }>{props.data.title}</Typography>
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="290"
          image={props.data.img.src}
          alt="Ideal Therapy Image"
        />
      )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color={props.data.backgroundColor === "#1bb2b0" ? "white" : "text.secondary"} component="p">
            {props.data.body}
          </Typography>
        )}
      </CardContent>
      <ITDialog data={props.data} open={open} handleClose={handleClose} />
    </Card>
  );
}

IndexCards.propTypes = {
  loading: PropTypes.bool,
};
