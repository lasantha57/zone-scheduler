import React, { Fragment, useContext, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';

const Schedulelist = ({ searchTerm }) => {
    const { schedules, removeSchedule, editSchedule, scale } = useContext(StoreContext);

    const [searchResults, setSearchResults] = React.useState([]);

    useEffect(() => {
        const results = schedules.filter(schedule =>
            schedule.zone.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm, schedules]);

    return (
        <Fragment>
            {searchResults.length > 0 ? <ul className="list-group">
                {searchResults.map(schedule => (
                    <li className="list-group-item" key={schedule.id}>
                        <h6 className="my-0 pb-1">{schedule.zone}</h6>
                        <div className="text-muted">{schedule.name} - {schedule.time} <span className="badge badge-secondary">{schedule.temperature.toFixed(2)} °{scale}</span></div>
                        <div className="d-block mt-1" role="group" >
                            <Link to={`/edit/${schedule.id}`}><button className="btn btn-link btn-sm d-inline pl-0" onClick={() => editSchedule(schedule.id)}>Edit</button></Link>
                            <button className="btn btn-light btn-sm" onClick={() => removeSchedule(schedule.id)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul> : <p className="text-center py-5">No Data</p>}
        </Fragment>
    )
}

export default Schedulelist;
