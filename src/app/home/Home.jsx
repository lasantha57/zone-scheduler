import React from 'react';

const Home = () => {

    const [searchTerm, setSearchTerm] = React.useState('');

    return (
        <div className="container">
            <input type="search" className="form-control mb-3" placeholder="Search by Zone" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
        </div>
    )
}

export default Home;