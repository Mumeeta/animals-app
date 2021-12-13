import React, { Component } from "react";
import { Routes, Route, Switch } from "react-router-dom";
import AnimalsList from "./AnimalsList";
import Home from "./Home";
import About from "./About";
import AnimalsSingle from "./AnimalsSingle";

class Main extends Component {
  render() {
    return (
      <main>
        <Route>
          <Route path="/" exact component={Home} />
          <Route path="/animals" exact component={AnimalsList} />
          <Route path="/about" component={About} />
          <Route path="/animals/:id" component={AnimalsSingle} />
        </Route>
      </main>
    );
  }
}

export default Main;
