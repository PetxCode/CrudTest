import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { db } from "../base";

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

export default function EditingScreen({ task, id }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState(task);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateTask = async (e) => {
    await db.collection("TaskInput").doc(id).update({
      task: input,
    });
    console.log(id, input);
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
            <h2 id="transition-modal-title">Edit your Task Here</h2>
            <p id="transition-modal-description">
              <form>
                <div
                  style={{
                    width: "600px",
                    height: "40px",
                    border: "1px solid lightblue",
                    borderRadius: "50px",
                  }}
                >
                  <input
                    style={{
                      width: "90%",
                      height: "90%",
                      border: "none",
                      outlineWidth: "0",
                      backgroundColor: "transparent",
                      marginLeft: "20px",
                      fontSize: "15px",
                      fontFamily: "Poppins",
                    }}
                    placeholder="Enter Your Task"
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "600px",
                    height: "40px",
                    // border: "1px solid lightblue",
                    // borderRadius: "50px",
                  }}
                >
                  <center>
                    <button
                      // type="submit"
                      style={{
                        backgroundColor: "lightblue",
                        width: "80%",
                        height: "35px",
                        borderRadius: "50px",
                        fontSize: "15px",
                        marginTop: "20px",
                        fontFamily: "Poppins",
                        outlineWidth: "0",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        updateTask(id);
                        setOpen(false);
                      }}
                    >
                      Save Edited Task
                    </button>
                  </center>
                </div>
              </form>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
