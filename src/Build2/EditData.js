import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { db } from "../base";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ task, id }) {
  // console.log(task);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateData = async (task, id) => {
    await db.collection("newTask").doc(id).update({
      task: input,
    });
    console.log(id);
    console.log(input);
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Edit
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Edit Task</h2>
            <p id="transition-modal-description">
              <input
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                placeholder="Enter a value"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateData(task, id);
                }}
              >
                Save
              </button>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
