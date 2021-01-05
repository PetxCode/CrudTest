import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { BorderRight } from "@material-ui/icons";
import { db } from "../base";
import firebase from "firebase";

const ref = db.collection("bestTime");
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

export default function EditingScreen({ id, task }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState(task);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editData = async (id) => {
    await ref.doc(id).update({
      task: text,
    });
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
            <h2 id="transition-modal-title">Edit task Here</h2>
            <p id="transition-modal-description">
              Are you sure you want to Edit this TASK?
            </p>
            <div>
              <input
                style={{
                  width: "400px",
                  height: "30px",
                  border: "1px solid lightblue",
                  borderRadius: "10px",
                  fontFamily: "Poppins",
                  paddingLeft: "15px",
                  outlineWidth: "0",
                  marginRight: "15px",
                }}
                placeholder="Edit your Task Here"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              <button
                style={{
                  fontFamily: "Poppins",
                  fontSize: "10px",
                  width: "50px",
                  height: "20px",
                  borderRadius: "10px",
                  backgroundColor: "lightblue",
                  outlineWidth: "0",
                }}
                onClick={(e) => {
                  editData(id);
                  setOpen(false);
                  console.log(id, task, text);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
