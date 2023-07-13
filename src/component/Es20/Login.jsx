import React from "react";
import { Welcome } from "./Welcome6";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    const { onLogin } = this.props;
    const { username, password } = this.state;
    onLogin({ username, password });
  };

  handleReset = () => {
    const { handleReset } = this.props;
    this.setState({
      username: "",
      password: "",
    });
    console.log("from login reset");
  };

  render() {
    const { username, password } = this.state;
    const isDisabled = username === "" || password === "";

    return (
      <div>
        <Welcome name={username} />
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleInputChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
          placeholder="Password"
        />
        <button disabled={isDisabled} onClick={this.handleLogin}>
          Login
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Login;
