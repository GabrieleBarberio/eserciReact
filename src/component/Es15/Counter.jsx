import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.props.initialValue;
    this.state = {
      count: props.initialValue || 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { count } = this.state;
    return <CounterDisplay count={count} />;
  }
}
