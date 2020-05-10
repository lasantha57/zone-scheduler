import React from 'react';

import Schedulelist from './ScheduleList';

const Home = () => {

    const [searchTerm, setSearchTerm] = React.useState('');

    return (
        <div className="container">
            <input type="search" className="form-control mb-3" placeholder="Search by Zone" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
            <Schedulelist searchTerm={searchTerm}></Schedulelist>
        </div>
    )
}

export default Home;