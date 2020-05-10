import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Header.css';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Zone Scheduler</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-end" id="navbarSupportedContent">
                <div className="navbar-nav">
                    <Link to={`/create`}><button className="btn btn-outline-secondary mr-2">Create Schedule</button></Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;
