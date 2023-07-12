import React from "react";
import { Welcome5 } from "./component/Es10/Welcome5";
//name={<strong>Luca</strong>} passato come props per l'e5
class App extends React.Component {
  render() {
    return (
      <>
        <Welcome5 age={66} name="John" />
      </>
    );
  }
}

export default App;
