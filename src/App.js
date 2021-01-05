import "./App.css";
import Start from "./Build2/Start";
import Post from "./components/Post/Post";
import View from "./components/View/View";
import InputScreen from "./NewWork/InputScreen";
import StartScreen from "./NewWork/StartScreen";
import TimeManager from "./Timer/TimeManager";
import Timer from "./Timer/Timer";

import HomeScreen from "./Project/HomeScreen";
import ViewScreenPage from "./TimerProject/ViewScreenPage";
import ProjectManager from "./TimerProject/ProjectManager";
import HomeStartPoint from "./ContextAPI/HomeStartPoint";
import HomeDesign from "./ContextAPI/HomeDesign";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeedDesignPage from "./ContextAPI/FeedDesignPage";
import HomeDesignPage from "./ContextAPI/HomeDesignPage";

import AppState from "./ContextAPI/Context/AppState";

function App() {
  return (
    <AppState>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeDesign} />
          <Route exact path="/home" component={HomeDesignPage} />
          <Route exact path="/feed" component={FeedDesignPage} />
        </Switch>
      </Router>
    </AppState>
  );
}

export default App;

// <View />
