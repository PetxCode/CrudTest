import React, { useState, useReducer } from "react";

const initState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "A":
      return {
        ...state,
        count: state.count + 1,
      };

    case "B":
      return {
        ...state,
        count: state.count - 1,
      };

    case "C":
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};

function HomeStartPoint() {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducer, initState);

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
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
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
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: "C",
                payload: input,
              });
            }}
          >
            Initial Count
          </button>
        </form>
      </center>

      <center style={{ marginTop: "60px", fontSize: "30px" }}>
        {state.count}
      </center>
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
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "B",
            });
          }}
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
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "A",
            });
          }}
        >
          Increase Count
        </button>
      </center>
    </div>
  );
}

export default HomeStartPoint;
