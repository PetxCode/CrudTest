import React, { useState, useEffect } from "react";

function ViewScreenPage({ name }) {
  const [counter, setCounter] = useState("");
  const [isCounting, setIsCounting] = useState(false);
  const [shouldAlert, setShouldAlert] = useState(false);

  useEffect(() => {
    const counterInt = parseInt(counter);

    if (isCounting && counter > 0) {
      setTimeout(() => {
        setCounter(counterInt - 1);
      }, 1000);
    } else {
      if (shouldAlert) {
        alert("Your Task time has been exhuasted...");
        setShouldAlert(false);
        setCounter("");
      }
      setIsCounting(false);
    }
  }, [counter, isCounting]);

  return (
    <div>
      <div style={{ display: "flex", margin: "10px 0" }}>
        <div style={{ marginRight: "20px" }}>{name}</div>
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
            type="Number"
            placeholder="Enter Time in Sec"
            disabled={isCounting}
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
              setIsCounting(true);
              setShouldAlert(true);
            }}
          >
            Start
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default ViewScreenPage;
