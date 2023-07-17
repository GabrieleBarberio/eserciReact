import React from "react";
import { Counter } from "./component/Es14/Counter";
import { ClickCounter } from "./component/Es16/ClickCounter";
import ClickTracker from "./component/Es17/ClickTracker";
import Login from "./component/Es20/Login";
import UncontrolledLogin from "./component/Es21/UncontrolledLogin";
import TodoList from "./component/Es23/TodoList";
import TodoList1 from "./component/Es25/TodoList1";
import TodoList2 from "./component/Es26/TodoList2";
import TodoList3 from "./component/Es27/TodoList3";
import { LanguageSelector } from "./component/Es28/LanguageSelector";
import { ClickCounterFunc } from "./component/Es30/ClickCounterFunc";
import { LoginFunc } from "./component/ES31/LoginFunc";
import { ClickCounterFunc2 } from "./component/ES32/ClickCounterFunc2";
import { CounterFunc } from "./component/ES33/CounterFunc";
import { GithubUser } from "./component/ES34/GithubUser";
import GithubUserList from "./component/Es35/GithubUserList";
import CounterHook from "./component/es36/CounterHook";
import { FormHook } from "./component/es37/FormHook";
import { GithubUserHook } from "./component/es38/GithubUserHook";
import { GithubUserHook2 } from "./component/es39/GithubUserHook2";
import FormCar from "./component/es40/FormCar";
import FromCar from "./component/es40/FormCar";

import { Display } from "./component/es41/DisplayLanguage";
import CounterHook2 from "./component/es42/CounterHook";

//name={<strong>Luca</strong>} passato come props per l'e5
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      carData: {
        model: "",
        year: "",
        color: "",
      },
    };
  }

  handleLogin = ({ username, password }) => {
    this.setState({
      username: username,
      password: password,
    });
  };

  handleSub = (e) => e.preventDefault();
  onCounterChange = (count) => {
    console.log(count);
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
        <TodoList3
          render={(todos, handleDelete) => (
            <ul>
              {todos.map((todo, i) => (
                <li key={i}>
                  {todo} <button onClick={() => handleDelete(i)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
        />
        <LanguageSelector />

        <span>
          <strong>ES30</strong>
        </span>
        <ClickCounterFunc />
        <LoginFunc />
        <ClickCounterFunc2 onCounterChange={this.onCounterChange} />
        <CounterFunc />
        <GithubUser username="GabrieleBarberio" />
        <GithubUserList />
        <CounterHook />
        <FormHook />
        <GithubUserHook />
        <GithubUserHook2 user="GabrieleBarberio" />
        <FromCar
          initialValue={{ model: "audi", year: 2002, color: "black" }}
          handleSub={this.handleSub}
        />
        <Display />
        <CounterHook2 />
      </>
    );
  }
}

export default App;
