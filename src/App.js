import React from 'react';

import Form from "./components/Form/Form"

import OrgVis from "./components/OrgVis/OrgVis"

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOrgName: 'initCurrentOrgName'
    }
  }


  render() {
    return (
      <div className="App">

        <Form saveUp={s => {
          console.log("parent saveUp response s =", s)
          this.setState({ currentOrgName: s.orgName })}}
        />

        <OrgVis saveDown={this.state}/>

      </div>
    );
  }

}

export default App;