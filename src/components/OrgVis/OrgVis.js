import React from 'react';

import './OrgVis.css'

class OrgVis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cOrgName: "search for an organization above"
        };
    }

    componentWillReceiveProps(nextProps) {
        var cON = nextProps.saveDown.currentOrgName
        console.log("oV cWRP orgName =", cON)
        this.setState({ cOrgName: cON })
    }

    render() {
        return (
            <div className="OrgVis">
                <p>Organization Search Result: {this.state.cOrgName}</p>
            </div>
        )
    }
}

export default OrgVis