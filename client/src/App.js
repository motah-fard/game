import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./screens/Home";
import "./App.css";
import { useState } from "react";
import Login from "./screens/Login";
import Register from "./screens/Register";
import AddWord from "./screens/AddWord";
import Words from "./screens/Words";
import Test from "./screens/Test";
import Hangman from "./components/Hangman";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Nav user={user} setUser={setUser} />
      <Switch>
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/register">
            <Register setUser={setUser} />
          </Route>
          <Route path="/words">
            <Words user={user} setUser={setUser} />
          </Route>
          <Route path="/new/word">
            <AddWord />
          </Route>
          <Route path="/hangman">
            <Hangman user={user} setUser={setUser} />
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
