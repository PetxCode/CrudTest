import React from "react";
import ViewScreenPage from "../TimerProject/ViewScreenPage";

function ProjectManager() {
  const [counter, setCounter] = React.useState("");
  const [timerName, setTimerName] = React.useState([
    "Write some codes",
    "Go for Prayers",
  ]);

  const addTask = () => {
    setTimerName([...timerName, counter]);
  };

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <div
        style={{
          display: "flex",
          margin: "60px 0",
        }}
      >
        <div
          style={{
            marginRight: "10px",
            width: "350px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <input
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              border: "1px solid lightblue",
              // fontWeight: "bold",
              fontFamily: "Poppins",
              paddingLeft: "10px",
              marginRight: "0px",
              outlineWidth: "0",
            }}
            placeholder="Enter a Task"
            value={counter}
            onChange={(e) => {
              setCounter(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            style={{
              backgroundColor: "lightblue",
              outlineWidth: "0",
              borderRadius: "5px",
              width: "60px",
              height: "30px",
              // fontWeight: "bold",
              fontFamily: "Poppins",
              // border: "1px solid",
            }}
            onClick={(e) => {
              e.preventDefault();
              addTask();
            }}
          >
            Start
          </button>{" "}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {timerName.map((theName, i) => (
          <ViewScreenPage key={i} name={theName} />
        ))}
      </div>
    </div>
  );
}

export default ProjectManager;
