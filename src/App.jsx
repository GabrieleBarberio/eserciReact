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
import { FilteredList } from "./component/es43/FilteredList";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

//name={<strong>Luca</strong>} passato come props per l'e5
class App extends React.Component {
  render() {
    return (
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<CounterHook2 />} />
        </Routes>
      </>
    );
  }
}

export default App;
