import React, { useState, useEffect } from "react";
import "./Post.css";
import { db } from "../../base";
import firebase from "firebase";
import View from "../View/View";
import Modal from "@material-ui/core/Modal";
import SimpleModal from "../View/View";

function Post(props) {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState([
    // "Do laundary",
    // "Go to Gym",
    // "Do some Cooking",
  ]);

  const getData = async () => {
    await db.collection("todo").onSnapshot((snapshot) => {
      const i = [];
      snapshot.forEach((doc) => {
        i.push({ ...doc.data(), id: doc.id });
      });
      setTask(i);
    });
  };

  const PostInput = async () => {
    // setTask([...task, input]);
    // console.log("am i added?");

    await db.collection("todo").doc().set({
      task: input,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  const deleteEntry = async (id) => {
    if (window.confirm("Are you sure")) {
      await db.collection("todo").doc(id).delete();
    }
    // console.log("Hello");
  };

  const updateEntry = async (id) => {
    const i = prompt();
    await db.collection("todo").doc(id).set(
      {
        task: i,
      },
      { merge: true }
    );
    console.log(id);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="post">
        <form>
          <div className="post__input">
            <input
              placeholder="enter a tast to do"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              PostInput();
              console.log(task);
            }}
          >
            Submit
          </button>
        </form>

        {task.map(({ task, id, time }) => (
          <div key={id}>
            <center className="view">
              <div className="view1">
                {" "}
                <div className="view2">🕥</div>
                <div> {task}</div>
              </div>
              <div className="view1">
                <div className="view2">
                  {" "}
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      // updateEntry(id);
                      // console.log(id);
                    }}
                  >
                    <SimpleModal task={task} setTask={setTask} id={id} />
                  </div>
                </div>

                <div
                  className="delete"
                  onClick={(e) => {
                    deleteEntry(id);
                    console.log(id);
                  }}
                >
                  {" "}
                  ❌
                </div>
              </div>
            </center>
          </div>
        ))}
      </div>
    </>
  );
}

export default Post;

// <View task={task} setTask={setTask} />
