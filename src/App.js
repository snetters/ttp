import React from 'react'

import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import OrgSearch from './components/OrgSearch/OrgSearch'
import NotFound from './components/NotFound/NotFound'

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/orgSearch' component={OrgSearch} />
            <Route path='/404' component={NotFound} />
            <Redirect to='/404' />
          </Switch>

        </div>
      </Router>
    );
  }

}

export default App