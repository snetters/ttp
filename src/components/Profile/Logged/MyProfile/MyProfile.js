import React from 'react'

import './MyProfile.css'

class MyProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            username: this.props.profState.username,
            pass: this.props.profState.pass
        }
    }

    compo

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div className="MyProfile">
                <p>MyProfile</p>
                <br />

                <p>Username: {this.state.username}</p>
                <p>Password: {this.state.pass}</p>
            </div>
        )
    }
}

export default MyProfile