// import { Link } from "@material-ui/core";
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppContext from "./Context/AppContext";

function HomeDesign() {
  const { isAuth, setIsAuth } = useContext(AppContext);
  return (
    <div>
      <center>Home Page Design</center>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <div style={{ cursor: "pointer" }}>
          <Link
            to="/home"
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            Home
          </Link>
        </div>
        <div style={{ cursor: "pointer", textDecoration: "none" }}>
          <Link
            to="/feed"
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            Feed
          </Link>
        </div>

        {isAuth ? (
          <button
            style={{
              marginTop: "0px",
              width: "100px",
              height: "40px",
              borderRadius: "30px",
              // border: "1px solid lightblue",
              outlineWidth: "0",
              backgroundColor: "lightblue",
              fontFamily: "Poppins",
            }}
            onClick={(e) => {
              e.preventDefault();
              setIsAuth(false);
            }}
          >
            {" "}
            LogOut{" "}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default HomeDesign;
