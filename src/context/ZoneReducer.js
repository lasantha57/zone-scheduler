export default (state, action) => {

    switch (action.type) {
        case 'FETCH_ZONES':
            return {
                ...state,
                zones: [...state.zones, action.payload]
            };
        default: return state;
    }
}