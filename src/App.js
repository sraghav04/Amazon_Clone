import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
function App() {
  return (
    <Router>
      {/* BEM Naming */}
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h2>Checkout page</h2>
          </Route>
          <Route path="/login">
            <h2>Login page</h2>
          </Route>
          <Route path="/">
            <Header />
            <h2>Home Page</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
