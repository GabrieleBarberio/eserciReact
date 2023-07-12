import React from "react";
import { Message } from "../Es1/Hello";
import { Age } from "./Age";

export class Welcome5 extends React.Component {
  render() {
    const { name = "Mario", age } = this.props;
    return (
      <>
        <h1>Hello, {name}</h1>
        <p> {<Message />}</p>
        {age >= 18 && age <= 65 ? (
          <p> your age is: {<Age age={age} />} </p>
        ) : (
          ""
        )}
      </>
    );
  }
}
