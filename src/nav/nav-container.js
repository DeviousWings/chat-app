import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    return (
      <div>
        <NavLink exact to='/'>
          Home
        </NavLink>

        <NavLink to='/about-me'>Profile</NavLink>

        <button>Group</button>
        <button>DM</button>
      </div>
    );
  }
}
