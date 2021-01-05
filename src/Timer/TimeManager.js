import React from "react";
import EnterLabel from "./EnterLabel";
import Timer from "./Timer";

function TimeManager() {
  const [input, setInput] = React.useState("");
  const [taskTime, setTaskTime] = React.useState([]);

  const onSubmit = () => {
    setTaskTime([...taskTime, input]);
  };

  return (
    <div>
      <center style={{ marginBottom: "40px" }}>This is the Timer Screen</center>
      <div
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: "0px",
            width: "300px",
            height: "40px",
            border: "1px solid lightblue",
            borderRadius: "50px",
          }}
        >
          <input
            type="text"
            style={{
              width: "90%",
              height: "90%",
              border: "none",
              outlineWidth: "0",
              backgroundColor: "transparent",
              marginLeft: "0px",
              fontSize: "15px",
              fontFamily: "Poppins",
            }}
            placeholder="Enter Your Task Schedule Time"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "40px",
          }}
        >
          <button
            style={{
              backgroundColor: "lightblue",
              width: "50%",
              height: "35px",
              borderRadius: "50px",
              fontSize: "15px",
              marginTop: "0px",
              fontFamily: "Poppins",
              outlineWidth: "0",
            }}
            onClick={(e) => {
              e.preventDefault();
              onSubmit();
              setInput("");
              console.log(input);
            }}
          >
            Enter Task
          </button>
        </div>
      </div>
      <div>
        {taskTime.map((task) => (
          <Timer name={task} />
        ))}
      </div>
    </div>
  );
}

export default TimeManager;

// <Timer name="Goto Studies" />
// <Timer name="Goto CodeLab" />
