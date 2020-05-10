import React from 'react';
import { useHistory } from 'react-router-dom';

const Schedule = (route) => {
    let history = useHistory();


    const onSubmit = e => {
        e.preventDefault();

        history.push('/');
    }

    return (
        <div className="container">
            <form className="" onSubmit={onSubmit}>

            </form>
        </div>
    )
}

export default Schedule;