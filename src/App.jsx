import React from "react";
import { Counter } from "./component/Es14/Counter";
import { ClickCounter } from "./component/Es16/ClickCounter";
import ClickTracker from "./component/Es17/ClickTracker";
import Login from "./component/Es20/Login";
import UncontrolledLogin from "./component/Es21/UncontrolledLogin";
import TodoList from "./component/Es23/TodoList";
import TodoList1 from "./component/Es25/TodoList1";
import TodoList2 from "./component/Es26/TodoList2";
//name={<strong>Luca</strong>} passato come props per l'e5
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleLogin = ({ username, password }) => {
    this.setState({
      username: username,
      password: password,
    });
  };

  render() {
    return (
      <>
        <Counter initialValue={Number(10)} />
        <ClickCounter />
        <ClickTracker />
        <Login onLogin={this.handleLogin} />
        <UncontrolledLogin />
        <TodoList />
        <span>Todo es 25</span>
        <TodoList1 />
        <TodoList2 />
      </>
    );
  }
}

export default App;
