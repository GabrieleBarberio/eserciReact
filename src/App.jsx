import React from "react";
import { Welcome5 } from "./component/Es8/Welcome5";
import { Age } from "./component/Es8/Age";

//name={<strong>Luca</strong>} passato come props per l'e5
class App extends React.Component {
  render() {
    return (
      <>
        <Welcome5 age={<Age />} name={<strong>Luca</strong>} />
      </>
    );
  }
}

export default App;
