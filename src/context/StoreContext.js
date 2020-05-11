import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    scale: 'C',
    schedules: [
        { id: 1, name: 'Sample Schedule', zoneId: 1, zone: 'Office', time: '10.23', temperature: 30 },
    ]
}

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeSchedule(id) {
        dispatch({
            type: 'REMOVE_SCHEDULE',
            payload: id
        });
    };

    function addSchedule(schedules) {
        dispatch({
            type: 'ADD_SCHEDULE',
            payload: schedules
        });
    };

    function editSchedule(schedules) {
        dispatch({
            type: 'EDIT_SCHEDULE',
            payload: schedules
        });
    };

    function changeScale(scale) {
        dispatch({
            type: 'CHANGE_SCALE',
            payload: scale
        });
    };

    return (<StoreContext.Provider value={{
        schedules: state.schedules,
        scale: state.scale,
        removeSchedule,
        addSchedule,
        editSchedule,
        changeScale
    }}>
        {children}
    </StoreContext.Provider>);
}