import React, { forwardRef } from "react";
import { db } from "../base";
import FlipMove from "react-flip-move";
import SimpleModal from "./EditData";
import TransitionsModal from "./EditData";

const ViewStart = (props) => {
  // const [input, setInput] = React.useState("");
  const [task, setTask] = React.useState([
    // "Go to School",
    // "Write some Code",
    // "Try something new",
  ]);

  const getData = async () => {
    await db
      .collection("newTask")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setTask(items);
      });
  };

  const deleteData = async (id) => {
    if (window.confirm("Are you sure?")) {
      await db.collection("newTask").doc(id).delete();
    }
  };

  // console.log(task);
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        {task.map(({ task, id, time }) => (
          <div key={id}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  width: "350px",
                  justifyContent: "space-between",
                }}
              >
                <div>🕥</div>
                <div>{task}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ cursor: "pointer" }}>
                  <TransitionsModal task={task} setTask={setTask} id={id} />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    deleteData(id);
                  }}
                >
                  ❌
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewStart;
