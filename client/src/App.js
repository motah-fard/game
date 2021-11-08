import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./screens/Home";
import "./App.css";
import { useState } from "react";
import Login from "./screens/Login";
import Register from "./screens/Register";
import AddWord from "./screens/AddWord";
import Words from "./screens/Words";
import Hangman from "./components/Hangman";
import Games from "./screens/Games";
import Lose from "./screens/Lose";
import Win from "./screens/Win";
import './index.css'

function App() {
  const [user, setUser] = useState(null);
  const [randomWord, setRandomWord] = useState("");
  const [myWord, setMyWord] = useState([]);
  const [games, setGames] = useState([]);

  return (
    <div className="App">
      <Nav user={user} setUser={setUser} />
      <Switch>
        <main>
          <Route exact path="/">
            <Home
              user={user}
              setUser={setUser}
              randomWord={randomWord}
              setrandomWord={setRandomWord}
              myWord={myWord}
              setMyWord={setMyWord}
            />
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
            <Hangman
              user={user}
              setUser={setUser}
              randomWord={randomWord}
              setRandomWord={setRandomWord}
              myWord={myWord}
              setMyWord={setMyWord}
              games={games}
              setGames={setGames}
            />
          </Route>
          <Route path="/games">
            <Games
              user={user}
              setUser={setUser}
              randomWord={randomWord}
              setRandomWord={setRandomWord}
              myWord={myWord}
              setMyWord={setMyWord}
              games={games}
              setGames={setGames}
            />
          </Route>
          <Route path="/edit-word/:id">
            <AddWord />
          </Route>
          <Route path="/win">
            <Win user={user} setUser={setUser}/>
          </Route>
          <Route path="/lose">
            <Lose user={user} setUser={setUser}/>
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
