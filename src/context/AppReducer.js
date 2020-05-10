export default (state, action) => {

    const convertTemperature = (value, scale) => {
        if (scale === 'C') {
            return (value * 9 / 5) + 32;
        } else {
            return (value - 32) * 5 / 9;
        }
    }

    switch (action.type) {
        case 'REMOVE_SCHEDULE':
            return {
                ...state,
                schedules: state.schedules.filter(schedule => schedule.id !== action.payload)
            };
        case 'ADD_SCHEDULE':
            return {
                ...state,
                schedules: [...state.schedules, action.payload]
            };
        case 'EDIT_SCHEDULE': {
            const updatedSchedule = action.payload;

            const updatedSchedules = state.schedules.map(schedule => {
                if (schedule.id === updatedSchedule.id) {
                    return updatedSchedule;
                }
                return schedule;
            });

            return {
                ...state,
                schedules: updatedSchedules
            };
        }
        case 'CHANGE_SCALE': {
            const scale = action.payload;
            state.scale = scale;

            const updated = state.schedules.map(schedule => {
                schedule.temperature = convertTemperature(schedule.temperature, scale);
                return schedule;
            });

            return {
                ...state,
                schedules: updated
            };
        }
        default: return state;
    }
}