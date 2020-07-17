import React from 'react';

class OrgVis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orgName: "initOrgVisOrgName"
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log("oV cWRP nextProps.curState", nextProps.curState)
        var cSON = nextProps.curState.currentOrg
        this.setState({ cOrgName: cSON })
    }

    render() {
        return (
            <div >
                <p>Organization Name: {this.state.orgName}</p>
            </div>
        )
    }
}

export default OrgVis