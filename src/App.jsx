import React from "react";
import { Welcome3 } from "./component/Es6/Welcome3";
import { Age } from "./component/Es6/Age";

//name={<strong>Luca</strong>} passato come props per l'e5
class App extends React.Component {
  render() {
    return (
      <>
        <Welcome3 age={<Age age="2" />} name={<strong>Luca</strong>} />
      </>
    );
  }
}

export default App;
