import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import HomeDesign from "./HomeDesign";

function HomeDesignPage() {
  const { name, isAuth, setIsAuth } = useContext(AppContext);
  return (
    <div>
      <HomeDesign />
      <center>Home Page</center>
      <center style={{ marginTop: "60px" }}>
        <p> Hello</p>

        <p> {isAuth ? <p> welcome {name} </p> : null}</p>

        <div>
          {isAuth ? null : (
            <button
              style={{
                marginTop: "30px",
                width: "200px",
                height: "40px",
                borderRadius: "30px",
                // border: "1px solid lightblue",
                outlineWidth: "0",
                backgroundColor: "lightblue",
                fontFamily: "Poppins",
              }}
              onClick={(e) => {
                e.preventDefault();
                setIsAuth(!isAuth);
              }}
            >
              {" "}
              Login{" "}
            </button>
          )}
        </div>
      </center>
    </div>
  );
}

export default HomeDesignPage;
