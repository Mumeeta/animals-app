import React, { Component } from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <NavLink to="/">Animals</NavLink>
        </h1>
        <Nav />
      </header>
    );
  }
}

export default Header;
