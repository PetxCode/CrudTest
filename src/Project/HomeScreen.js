import React from "react";
import { db } from "../base";
import firebase from "firebase";

const ref = db.collection("bestTime");
function HomeScreen() {
  const [input, setInput] = React.useState("");
  const [done, setDone] = React.useState(false);
  const [counter, setCounter] = React.useState("");

  const toggle = () => {
    setDone(!done);
  };

  const postData = async () => {
    await ref.doc().set({
      task: input,
      done,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      dateTime: Date.now(),
      counter: counter,
    });
    setInput("");
  };

  return (
    <div>
      <center>Home Screen</center>
      <section>
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
          }}
        >
          <div>Enter a Task</div>
          <input
            style={{
              height: "40px",
              width: "400px",
              marginLeft: "20px",
              border: "1px solid lightblue",
              borderRadius: "30px",
              outlineWidth: "0",
              paddingLeft: "20px",
              fontSize: "15px",
              fontFamily: "Poppins",
            }}
            placeholder="Enter a Task"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            type="submit"
            style={{
              height: "50px ",
              width: "100px",
              marginLeft: "20px",
              borderRadius: "30px",
              outlineWidth: "0",
              backgroundColor: "lightblue",
              fontSize: "15px",
              fontFamily: "Poppins",
              color: "white",
            }}
            onClick={(e) => {
              e.preventDefault();
              postData();
            }}
          >
            Enter
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;
