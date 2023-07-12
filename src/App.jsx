import React from "react";
import { Welcome4 } from "./component/Es7/Welcome4";
import { Age } from "./component/Es7/Age";

//name={<strong>Luca</strong>} passato come props per l'e5
class App extends React.Component {
  render() {
    return (
      <>
        <Welcome4 age={<Age age={2} />} name={<strong>Luca</strong>} />
      </>
    );
  }
}

export default App;
