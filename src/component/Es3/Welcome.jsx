import React from "react";
import { Message } from "../Es1/Hello";

export class Welcome extends React.Component {
  render() {
    const { name = "Mario" } = this.props;
    return (
      <>
        <h1>Hello, {name}</h1>
        <p> {<Message />}</p>
      </>
    );
  }
}
