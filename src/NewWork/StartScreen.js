import React, { useState, forwardRef } from "react";
import InputScreen from "./InputScreen";
import { db } from "../base";
import firebase from "firebase";

const StartScreen = forwardRef((props, ref) => {
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);

  const enterData = async () => {
    await db.collection("TaskInput").doc().set({
      task: input,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      dateTime: Date.now(),
      done: done,
    });
  };

  return (
    <div ref={ref} style={{ marginTop: "50px" }}>
      <center>Start up screen</center>
      <div style={{ marginTop: "50px" }}>
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
                type="submit"
                style={{
                  display: "none",
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
                  enterData();
                  console.log(input);
                  setInput("");
                }}
              >
                Add a Task
              </button>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
});

export default StartScreen;
