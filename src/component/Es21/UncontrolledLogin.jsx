import React, { Component } from "react";

class UncontrolledLogin extends Component {
  constructor(props) {
    super(props);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;

    console.log("Username:", username);
    console.log("Password:", password);

    this.usernameRef.current.value = "";
    this.passwordRef.current.value = "";
  };

  handleReset = () => {
    this.usernameRef.current.value = "";
    this.passwordRef.current.value = "";
  };

  render() {
    const isDisabled =
      this.usernameRef.current.value === "" ||
      this.passwordRef.current.value === "";

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={this.usernameRef} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={this.passwordRef} />
        </div>
        <div>
          <button disabled={isDisabled} type="submit">
            Login
          </button>
          <button type="button" onClick={this.handleReset}>
            Reset
          </button>
        </div>
      </form>
    );
  }
}

export default UncontrolledLogin;
