import React, { useState, useReducer } from "react";

function SaveFileSample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <center style={{ marginTop: "60px", fontSize: "20px" }}>
        Starting point
      </center>
      <div
        style={{
          marginTop: "60px",
          width: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <hr />
      </div>
      <center style={{ marginTop: "60px" }}>
        <form>
          <input
            style={{
              width: "300px",
              height: "40px",
              borderRadius: "20px",
              border: "1px solid lightblue",
              marginRight: "20px",
              outlineWidth: "0",
              paddingLeft: "20px",
              fontFamily: "Poppins",
            }}
            type="Number"
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <button
            style={{
              width: "100px",
              height: "40px",
              borderRadius: "20px",
              backgroundColor: "lightblue",
              fontFamily: "Poppins",
              outlineWidth: "0",
            }}
          >
            Initial Count
          </button>
        </form>
      </center>

      <center style={{ marginTop: "60px", fontSize: "30px" }}>{count}</center>
      <center style={{ marginTop: "60px", fontSize: "30px" }}>
        <button
          style={{
            width: "150px",
            height: "40px",
            borderRadius: "20px",
            backgroundColor: "red",
            color: "white",
            outlineWidth: "0",
            fontFamily: "Poppins",
          }}
          onClick={() => {}}
        >
          Decrease Count
        </button>{" "}
        <button
          style={{
            width: "150px",
            height: "40px",
            borderRadius: "20px",
            backgroundColor: "lightgreen",
            color: "white",
            outlineWidth: "0",
            fontFamily: "Poppins",
          }}
          onClick={() => {}}
        >
          Increase Count
        </button>
      </center>
    </div>
  );
}

export default SaveFileSample;
