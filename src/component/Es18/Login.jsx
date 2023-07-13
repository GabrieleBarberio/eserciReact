import React from "react";
import { Welcome } from "./Welcome6";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <input type="text" value={name} onChange={this.handleInputChange} />
        <Welcome name={name} />
      </div>
    );
  }
}

export default Login;
