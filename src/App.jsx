import React from "react";
import CounterHook2 from "./component/es42/CounterHook";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { GithubUser } from "./component/ES34/GithubUser";
import { User } from "./component/User";

//name={<strong>Luca</strong>} passato come props per l'e5
class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<CounterHook2 />} />
          <Route path="/users" component={<User />} />
          <Route path="users/:username" element={<GithubUser />} />
        </Routes>
      </>
    );
  }
}

// Browser Router Wrappa tutto in main ho aggiunto una mini nav velocissima e ho diviso in home tutti gli esercizi precedenti nella route counter ho messo il counter

export default App;
