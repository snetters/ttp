import React from 'react';

import './Nav.css'

class Nav extends React.Component {
    render() {
        return (
            <div >
                 <nav className="nav-body">
                    <h3>Navication Menu: </h3>
                    <ul className="nav-links">
                        <li>About</li>

                        <li>Organization Search</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav