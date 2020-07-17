import React from 'react';

import Form from "./components/Form"
import OrgVis from "./components/OrgVis"

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOrg: 'initCurrentOrg'
    }
    this.apiCall.bind(this);
  }

  apiCall() {
    return
  }

  render() {
    return (
      <div className="App">

        <Form saveUp={s => {
          console.log("parent saveUp response s=", s)
          this.setState({ currentOrg: s.orgName })}} />

        <OrgVis />

      </div>
    );
  }

}

export default App;