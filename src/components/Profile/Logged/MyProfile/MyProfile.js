import React from 'react'

import PropTypes from 'prop-types'

import './MyProfile.css'

class MyProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            username: this.props.profState.username,
            pass: this.props.profState.pass
        }
    }

    render() {
        console.log("Prop types", PropTypes)
        return (
            <div className="MyProfile">
                <p>My Profile</p>
                <br />

                <p>Username: {this.state.username}</p>
                <p>Password: {this.state.pass}</p>
            </div>
        )
    }
}

MyProfile.propTypes = {
    profState: PropTypes.object,
}

MyProfile.defaultProps = {
    profState: {
        username: 'username',
        pass: 'Password',
    }
}

export default MyProfile