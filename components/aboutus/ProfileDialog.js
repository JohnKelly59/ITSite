import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ReactCardFlip from "react-card-flip";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ProfileDialog(props) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = (e) => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <BootstrapDialog
        maxWidth={"sm"}
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <ReactCardFlip isFlipped={isFlipped}>
          <>
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={props.handleClose}
            >
              {props.data.name}
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img mindWidth={"250px"} centered src={props.data.img} />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClick}>
                Flip
              </Button>
              <Button autoFocus onClick={props.handleClose}>
                Close
              </Button>
            </DialogActions>
          </>
          {isFlipped && (
            <>
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={props.handleClose}
              >
                {props.data.name}
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography color="text.secondary" gutterBottom>
                  {props.data.title}
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Typography>{props.data.info}</Typography>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClick}>
                  Flip
                </Button>
                <Button autoFocus onClick={props.handleClose}>
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </ReactCardFlip>
      </BootstrapDialog>
    </div>
  );
}
