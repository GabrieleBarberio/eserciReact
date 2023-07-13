import React from "react";

export class Welcome extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Welcome, {name}!</h1>
      </div>
    );
  }
}
