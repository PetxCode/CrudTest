import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { db } from "../../base";
import firebase from "firebase";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ task, id }) {
  const [input, setInput] = React.useState(task);
  const [tasks, setTasks] = React.useState([]);
  console.log(id);
  const updateEntry = async (task, id) => {
    await db.collection("todo").doc(id).set(
      {
        task: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    setOpen(false);
    console.log(task);
    console.log(id);
  };

  const delEntry = async (id) => {
    await db.collection("todo").doc(id).delete();
    setOpen(false);
    console.log("got it");
  };

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Edit Task</h2>
      <p id="simple-modal-description">
        <input
          placeholder={task.task}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={
            () => {
              updateEntry(task, id);
            }
            // delEntry
          }
        >
          Save
        </button>
      </p>
    </div>
  );

  return (
    <div>
      <div type="button" onClick={handleOpen} style={{ cursor: "pointer" }}>
        Edit
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

// <SimpleModal />
