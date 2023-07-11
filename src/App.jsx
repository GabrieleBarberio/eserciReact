import React from "react";
import { Welcome1 } from "./component/Es4/Welcome1";

//name={<strong>Luca</strong>} passato come props per l'e5
class App extends React.Component {
  render() {
    return (
      <>
        <Welcome1 age="22" name={<strong>Luca</strong>} />
      </>
    );
  }
}

export default App;
