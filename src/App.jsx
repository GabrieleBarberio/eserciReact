import React from "react";
import { Welcome5 } from "./component/Es11/Welcome5";
import { Counter } from "./component/Es12 copy/Counter";
//name={<strong>Luca</strong>} passato come props per l'e5
class App extends React.Component {
  render() {
    return (
      <>
        <Counter />
      </>
    );
  }
}

export default App;
