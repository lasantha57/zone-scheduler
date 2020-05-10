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

        <div className="container">
            <nav className="navbar justify-content-center navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">Zone Scheduler</NavLink>
            </nav>
            <div className="clearfix mt-3">
                <Link to={`/create`}><button className="btn btn-sm btn-outline-secondary">Create Schedule</button></Link>
                <div className="float-right">
                    <div className="btn-group btn-group-sm" role="group" >
                        <button type="button" className={scale === 'C' ? 'btn btn-secondary btn-secondary active' : 'btn btn-secondary'} onClick={() => { toggleScale('C') }}>°C</button>
                        <button type="button" className={scale === 'F' ? 'btn btn-secondary active' : 'btn btn-secondary'} onClick={() => { toggleScale('F') }}>°F</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
