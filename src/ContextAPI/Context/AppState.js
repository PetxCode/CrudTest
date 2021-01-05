import AppContext from "./AppContext";

import React, { useState } from "react";

function AppState(props) {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AppContext.Provider
      value={{
        name: "Peter",
        isAuth: isAuth,
        setIsAuth: setIsAuth,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppState;
