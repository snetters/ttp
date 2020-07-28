import React from 'react';

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w3-sidebar w3-bar-block w3-card w3-animate-left w3-center">
        <h1 className="w3-xxxlarge w3-text-theme">Quick Navigation</h1>
        <input type="button" className="w3-bar-item w3-button" />

        {/* <a href="#" className="w3-bar-item w3-button">
                Profile
                </a>
                <a href="#" class="w3-bar-item w3-button">
                My Donations
                </a>
                <a href="#" class="w3-bar-item w3-button">
                My Organizations
                </a>
                <a href="#" class="w3-bar-item w3-button">
                Settings
                </a> */}
      </div>
    );
  }
}

export default Nav;
