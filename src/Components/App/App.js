import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import UserSubmit from "../UserSubmit/UserSubmit";
import BackgroundImage from "../Background/Background";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/submit">
            <UserSubmit />
          </Route>
        </Switch>
      </Router>
      <BackgroundImage />
    </div>
  );
}

export default App;

