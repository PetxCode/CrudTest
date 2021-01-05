import React, { useState, useEffect } from "react";
import { db } from "../base";
import firebase from "firebase";
import EditingScreen from "./EditingScreen";
import FlipMove from "react-flip-move";

const InputScreen = ({ input, setInput }) => {
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState(false);

  const toggle = () => {
    setDone(!done);
  };

  const updateState = async (id) => {
    await db.collection("TaskInput").doc(id).update({
      done: done,
    });
  };

  const findData = async () => {
    await db
      .collection("TaskInput")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setTodo(item);
      });
  };

  const deleteData = async (id) => {
    if (window.confirm("Are you sure?")) {
      return await db.collection("TaskInput").doc(id).delete();
    }
  };

  useEffect(() => {
    findData();
  }, []);
  return (
    <div style={{ marginTop: "50px" }}>
      <div>
        <center>Tasks Display Entries</center>
      </div>
      <div>
        <FlipMove>
          {todo.map(({ task, id, done, time }) => (
            <div
              key={id}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    marginRight: "15px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    toggle(id);
                    updateState(id);
                    console.log(id);
                    console.log(done);
                  }}
                >
                  {" "}
                  {done ? " 👍 " : " 👎 "}{" "}
                </div>
                <div style={{}}>{task} </div>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    marginRight: "15px",
                  }}
                >
                  {" "}
                  <EditingScreen task={task} id={id} />{" "}
                </div>
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    deleteData(id);
                  }}
                >
                  ❌{" "}
                </div>
              </div>
            </div>
          ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default InputScreen;
