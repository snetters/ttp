import React from 'react';

import { Link } from 'react-router-dom';

import './Nav.css'

class Nav extends React.Component {
    render() {
        return (
            <div className="navBody">
                 <nav className="navSections">
                    <ul className="navList">
                        <Link className="navLinks" to="/">
                            <li>Home</li>
                        </Link>

                        <Link className="navLinks" to="/about">
                            <li>About</li>
                        </Link>

                        <Link className="navLinks" to="/orgSearch">
                            <li>Organization Search</li>
                        </Link>

                        <Link className="navLinks" to="/profile">
                            <li>Profile</li>
                        </Link>

                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav