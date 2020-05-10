

import { BASE_API } from '../utils/config';

const getZones = async () => {
    const response = await fetch(`${BASE_API}/zones`);
    // const data = await response.json();
    return response.json()
}

export const zoneService = {
    getZones
};
