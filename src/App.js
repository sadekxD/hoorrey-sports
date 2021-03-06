import React from "react";
import "rsuite/dist/rsuite.min.css";
import "./styles/style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages and components
import SideNavbar from "./components/sideNavbar/SideNavbar";

import Live from "./pages/Live";
import Result from "./pages/Result";
import Upcoming from "./pages/Upcoming";
import CricketStatusCard from "./components/homepageCards/CricketStatusCard";
import HoroscopeCard from "./components/homepageCards/HoroscopeCard";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="container">
        <SideNavbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/live" exact>
            <Live />
          </Route>
          <Route path="/upcoming" exact>
            <Upcoming />
          </Route>
          <Route path="/result" exact>
            <Result />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
