import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li id="home-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li id="animals-link">
          <NavLink to="/animals">Animals</NavLink>
        </li>
        <li id="about-link">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
