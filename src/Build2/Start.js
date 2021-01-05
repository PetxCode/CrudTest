import React, { useState, useEffect } from "react";
import { db } from "../base";
import ViewStart from "./ViewStart";
import firebase from "firebase";

function Start(props) {
  const [input, setInput] = useState("");

  const postEntry = async () => {
    await db.collection("newTask").doc().set({
      task: input,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      timeNow: Date.now(),
    });
    // console.log(input);
    setInput("");
  };

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <center style={{ margin: "50px 0" }}> Start Now </center>
        <center>
          <form>
            <div
              style={{
                width: "500px",
                height: "50px",
                border: "1px solid lightblue",
                borderRadius: "50px",
              }}
            >
              <input
                style={{
                  outlineWidth: "0",
                  border: "0",
                  width: "90%",
                  height: "90%",
                  backgroundColor: "transparent",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                }}
                placeholder="Enter a Task"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <button
                style={{
                  display: "none",
                  outlineWidth: "0",
                  textTransform: "capitalize",
                  width: "90%",
                  height: "90%",
                  backgroundColor: "lightblue",
                  fontSize: "20px",
                  borderRadius: "30px",
                  fontFamily: "Poppins",
                  marginTop: "20px",
                  // fontWeight: "bold",
                }}
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  postEntry();
                }}
              >
                submit
              </button>
            </div>
          </form>{" "}
        </center>{" "}
        <center style={{ margin: "150px 0" }}>
          <ViewStart />
        </center>
      </div>{" "}
    </div>
  );
}

export default Start;
