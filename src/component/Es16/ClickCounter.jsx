import React from "react";

export class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue || 0,
    };
  }

  handleAdd = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <>
        This is the count from the button: {count}
        <button onClick={this.handleAdd}>Add More!</button>
      </>
    );
  }
}
