import React from 'react';

import Nav from "./components/Nav/Nav";
import OrgSearch from "./components/OrgSearch/OrgSearch";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path="/orgSearch" component={OrgSearch}/>

        </div>
      </Router>
    );
  }

}

export default App;