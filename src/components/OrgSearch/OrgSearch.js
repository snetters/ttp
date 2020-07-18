import React from 'react';

import Form from "../Form/Form"

import OrgVis from "../OrgVis/OrgVis"

class OrgSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOrgName: 'initCurrentOrgName'
    }
  }

  render() {
    return (
      <div className="OrgSearch">

        <Form saveUp={s => {
          console.log("parent saveUp response s =", s)
          this.setState({ currentOrgName: s.orgName })}}
        />

        <br />

        <OrgVis saveDown={this.state}/>

      </div>
    );
  }

}

export default OrgSearch;