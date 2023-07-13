import React from "react";

class ClickTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastButtonPressed: null,
    };
  }

  handleButtonClick = (event) => {
    const lastButtonPressed = event.target.innerText;
    this.setState({ lastButtonPressed });
  };

  render() {
    const { lastButtonPressed } = this.state;
    return (
      <div>
        <button onClick={this.handleButtonClick}>
          Pasta, patate e provola
        </button>
        <button onClick={this.handleButtonClick}>Pomodorino Fresco</button>
        <button onClick={this.handleButtonClick}>Pernice ai ferri</button>
        <h1>Last Button Pressed: {lastButtonPressed}</h1>
      </div>
    );
  }
}

export default ClickTracker;
