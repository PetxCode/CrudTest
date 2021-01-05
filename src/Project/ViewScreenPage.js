import React, { useState, useEffect } from "react";
import { db } from "../base";
import firebase from "firebase";
import EditingScreen from "./EditingScreen";

const ref = db.collection("bestTime");
function ViewScreenPage() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState("");
  const [done, setDone] = React.useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [shouldAlert, setShouldAlert] = useState(false);

  const toggle = () => {
    setDone(!done);
  };

  const getData = async () => {
    await ref.onSnapshot((snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      setData(items);
    });
  };

  const finishTask = async (id) => {
    ref.doc(id).update({
      done: done,
    });
  };

  const deleteTask = async (id) => {
    if (window.confirm("Are you sure?")) {
      ref.doc(id).delete();
    }
  };

  // console.log(data);
  useEffect(() => {
    getData();
    const counterInt = parseInt(counter);
    if (isCounting && counter > 0) {
      setTimeout(() => {
        setCounter(counterInt - 1);
      }, 1000);
    } else {
      setIsCounting(false);
    }
  }, [isCounting, counter]);

  const startCounter = async (id) => {
    setIsCounting(true);
    // await ref.doc(id).update({
    //   counter: counter,
    // });
  };
  return (
    <div>
      <center style={{ marginTop: "30px", marginBottom: "30px" }}>
        This is the Enter Page
      </center>
      <div style={{ marginTop: "30px" }}>
        {data.map(({ task, id, counter, done, time, dateTime }) => (
          <div
            key={id}
            style={{
              margin: "20px 40px",
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
                  marginRight: "20px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  toggle(id);
                  finishTask(id);
                  console.log(done);
                }}
              >
                {" "}
                {done ? " 👍 " : " 👎 "}{" "}
              </div>
              <div>{task} </div>
            </div>

            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginRight: "50px",
                }}
              ></div>
              <div
                style={{
                  marginRight: "20px",
                  cursor: "pointer",
                }}
              >
                {" "}
                <EditingScreen id={id} task={task} />
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  deleteTask(id);
                }}
              >
                ❌{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewScreenPage;
