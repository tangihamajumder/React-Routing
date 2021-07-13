import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/details/:name" exact>
            <CountryDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
