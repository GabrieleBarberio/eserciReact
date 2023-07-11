import React from "react";
import { Message } from "../Es1/Hello";

export class Welcome extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, {this.props.name}</h1>
        <p> {<Message />}</p>
      </>
    );
  }
}
