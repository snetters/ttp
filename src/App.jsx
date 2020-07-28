import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import OrgSearch from './components/OrgSearch/OrgSearch';
import Profile from './components/Profile/Profile';
import Netters from './components/Netters/Netters';
import NotFound from './components/NotFound/NotFound';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pass: '',
      loggedIn: false,
    };
    this.saveUp = this.saveUp.bind(this);
  }

  saveUp(state) {
    this.setState(state);
    console.log('saveUp ', this.state);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/orgSearch" component={OrgSearch} />
            <Route
              path="/profile"
              render={() => (
                <Profile saveUp={this.saveUp} appState={this.state} />
              )}
            />
            <Route path="/netters" component={Netters} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
