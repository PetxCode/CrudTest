import "./App.css";
import Start from "./Build2/Start";
import Post from "./components/Post/Post";
import View from "./components/View/View";
import InputScreen from "./NewWork/InputScreen";
import StartScreen from "./NewWork/StartScreen";
import TimeManager from "./Timer/TimeManager";
import Timer from "./Timer/Timer";

function App() {
  return (
    <div className="app">
      <div>
        <StartScreen />
        <InputScreen />
        <center>
          <TimeManager />
        </center>
      </div>
    </div>
  );
}

export default App;

// <View />
