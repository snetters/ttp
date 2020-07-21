import React from 'react';

import OrgSearchForm from './OrgSearchForm/OrgSearchForm';

import OrgVis from './OrgVis/OrgVis';

import './OrgSearch.css';

class OrgSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOrgName: 'initCurrentOrgName',
    };
  }

  render() {
    return (
      <div className="OrgSearch">
        <p>Organization Search</p>

        <OrgSearchForm
          saveUp={(s) => {
            console.log('parent saveUp response s =', s);
            this.setState({ currentOrgName: s.orgName });
          }}
        />

        <br />

        <OrgVis saveDown={this.state} />
      </div>
    );
  }
}

export default OrgSearch;
