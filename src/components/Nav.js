import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="App-header">
    <NavLink exact to="/">
      <h1 className="Home">Formula 1 App</h1>
    </NavLink>
    <ul className="Nav">
      <li>
        <NavLink exact activeClassName="active" to="/">Drivers</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/constructors">Constructors</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/circuits">Circuits</NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
