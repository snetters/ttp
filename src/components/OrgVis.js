import React from 'react';

class OrgVis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cOrgName: "initOrgVisOrgName"
        };
    }

    componentWillReceiveProps(nextProps) {
        var cON = nextProps.saveDown.currentOrgName
        console.log("oV cWRP orgName", cON)
        this.setState({ cOrgName: cON })
    }

    render() {
        return (
            <div >
                <p>Organization Name: {this.state.cOrgName}</p>
            </div>
        )
    }
}

export default OrgVis