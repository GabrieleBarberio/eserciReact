import React from "react";
import { Counter } from "./component/Es14/Counter";
//name={<strong>Luca</strong>} passato come props per l'e5
class App extends React.Component {
  render() {
    return (
      <>
        <Counter initialValue={Number(10)} />
      </>
    );
  }
}

export default App;
