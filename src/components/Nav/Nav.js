import React from 'react';

import { Link } from 'react-router-dom';

import './Nav.css'

class Nav extends React.Component {
    render() {
        return (
            <div >
                 <nav className="navBody">
                    <h3>Navigation Menu: </h3>
                    <ul className="navSections">
                        <Link className="navLinks" to="/">
                            <li>Home</li>
                        </Link>

                        <Link className="navLinks" to="/about">
                            <li>About</li>
                        </Link>

                        <Link className="navLinks" to="/orgSearch">
                            <li>Organization Search</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav