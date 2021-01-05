import React, { useState, useEffect } from "react";
import EnterLabel from "./EnterLabel";

function Timer(props) {
  const [input, setInput] = useState("");
  const [isCounting, setIsCounting] = useState(false);
  const [shouldCount, setShouldCount] = useState(false);

  useEffect(() => {
    const inputInt = parseInt(input);
    if (isCounting && input > 0) {
      setTimeout(() => {
        setInput(inputInt - 1);
      }, 1000);
    } else {
      if (shouldCount) {
        alert("Your set Task time is OVER!");
        setShouldCount(false);
        setInput("");
      }
      setIsCounting(false);
    }
  }, [input, isCounting]);
  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      <EnterLabel />
      <div
        style={{
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "lightblue",
        }}
      >
        <div style={{ marginRight: "20px" }}>{props.name}</div>
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
            type="Number"
            disabled={isCounting}
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
            // type="submit"
            disable={isCounting}
            style={{
              // display: "none",

              backgroundColor: "lightblue",
              width: "80%",
              height: "35px",
              borderRadius: "50px",
              fontSize: "15px",
              marginTop: "0px",
              fontFamily: "Poppins",
              outlineWidth: "0",
            }}
            onClick={(e) => {
              e.preventDefault();
              setIsCounting(true);
              setShouldCount(true);
              console.log(input);
            }}
          >
            Start Time
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
