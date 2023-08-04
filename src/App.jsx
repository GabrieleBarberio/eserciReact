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
        <div>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/users">Users</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<CounterHook2 />} />
          <Route path="/users" component={<User />} />
          <Route path="users/:username" element={<GithubUser />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </>
    );
  }
}

{
  /* <Routes>
<Route path="/" element={<Home />} />
<Route path="/counter" element={<CounterHook2 />} />
<Route path="/users" element={<User />}>
  <Route index element={<GithubUserList />} />                             ----> esnested route
</Route>
<Route path="*" element={<h1>Not Found</h1>} />
</Routes> */
}

// Browser Router Wrappa tutto in main ho aggiunto una mini nav velocissima e ho diviso in home tutti
//gli esercizi precedenti nella route counter ho messo il counter piu route users/:username degli altri es,
// ti mando lo stesso link per non duplicare troppo i file

export default App;
