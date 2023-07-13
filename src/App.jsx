import React from "react";
import { Counter } from "./component/Es14/Counter";
import { ClickCounter } from "./component/Es16/ClickCounter";
import ClickTracker from "./component/Es17/ClickTracker";
import Login from "./component/Es18/Login";
//name={<strong>Luca</strong>} passato come props per l'e5
class App extends React.Component {
  render() {
    return (
      <>
        <Counter initialValue={Number(10)} />
        <ClickCounter />
        <ClickTracker />
        <Login />
      </>
    );
  }
}

export default App;
