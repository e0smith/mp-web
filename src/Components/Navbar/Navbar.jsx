import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    return(
        <div class="nav-container">
            <nav id="navbar">
                <div class="link-container">
                    <li >
                        <Link className="nav-link" to="/">
                            HOME
                        </Link>
                        <Link className="nav-link" to="/Gallery">
                            GALLERY
                        </Link>
                    </li>
                </div>
            </nav>
        </div>
        )
}

export default Navbar;