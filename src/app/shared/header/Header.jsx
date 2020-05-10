import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { GlobalContext } from '../../../context/GlobalContext';

import './Header.css';

const Header = () => {

    const { scale, changeScale } = useContext(GlobalContext);

    const toggleScale = (selected) => {
        if (scale !== selected) {
            changeScale(selected);
        }
    }

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
                <div className="btn-group btn-group ml-2" role="group" >
                    <button type="button" className={scale === 'C' ? 'btn btn-secondary btn-secondary active' : 'btn btn-secondary'} onClick={() => { toggleScale('C') }}>°C</button>
                    <button type="button" className={scale === 'F' ? 'btn btn-secondary active' : 'btn btn-secondary'} onClick={() => { toggleScale('F') }}>°F</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;
