import React, { useState, useContext, useEffect, useCallback } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useHistory, Link } from 'react-router-dom';

import { zoneService } from '../../api-services/zone-service';

const Schedule = (route) => {
    const { addSchedule, schedules, editSchedule, scale } = useContext(GlobalContext);
    let history = useHistory();

    const currentScheduleId = route?.match?.params?.id;
    const editMode = !(currentScheduleId === undefined);

    const [zones, setZones] = useState([]);

    const [schedule, setSchedule] = useState({ id: -1, name: '', time: '', zoneId: -1, zone: '', temperature: 0 });

    useEffect(() => {
        const scheduleId = currentScheduleId;
        if (scheduleId) {
            const schedule = schedules.find(emp => emp.id === parseInt(scheduleId));
            setSchedule(schedule);
        } else {
            setSchedule({ id: -1, name: '', time: '', zoneId: -1, zone: '', temperature: 0 });
        }
    }, [currentScheduleId, schedules]);

    const fetchZones = useCallback(async () => {
        const data = await zoneService.getZones();
        setZones(data);
    }, [])

    useEffect(() => {
        fetchZones()
    }, [fetchZones])

    const onSubmit = e => {
        e.preventDefault();
        schedule.temperature = parseInt(schedule.temperature) || 0;
        schedule.zoneId = parseInt(schedule.zoneId) || 0;
        schedule.zone = findSelectedZoneName(schedule.zoneId);

        if (editMode) {
            editSchedule(schedule);
        } else {
            schedule.id = schedules.length + 1;
            addSchedule(schedule);
        }

        history.push('/');
    }

    const findSelectedZoneName = (zoneId) => {
        const selected = zones.find((item) => {
            return item.id === zoneId;
        })
        return selected?.name || '';
    }

    const isFormValid = () => {
        return schedule.name !== '' && schedule.time !== '' && schedule.temperature !== '' && schedule.zoneId !== -1;
    }

    const handleOnChange = (userKey, value) => {
        return setSchedule({ ...schedule, [userKey]: value });
    }

    return (
        <div className="container">
            <form className="mx-auto" onSubmit={onSubmit}>
                <div className="form-group col-sm-6 mx-auto">
                    <label htmlFor="schedule">Schedule Name</label>
                    <input type="text" className="form-control mt-2" name="name" id="schedule" value={schedule.name} onChange={(e) => handleOnChange('name', e.target.value)} />
                </div>
                <div className="form-group col-sm-6 mx-auto">
                    <label htmlFor="zone">Zone</label>
                    <select className="form-control mt-2" name="zoneId" value={schedule.zoneId} onChange={(e) => handleOnChange('zoneId', e.target.value)}>
                        <option value="default">Choose...</option>
                        {zones.length > 0 && zones.map((zone) => {
                            return <option key={zone.id} value={zone.id}>{zone.name}</option>
                        })}
                    </select>
                </div>
                <div className="form-group col-sm-6 mx-auto">
                    <label htmlFor="time">Time</label>
                    <input type="time" className="form-control mt-2" id="time" name="time" value={schedule.time} onChange={(e) => handleOnChange('time', e.target.value)} />
                </div>
                <div className="form-group col-sm-6 mx-auto">
                    <label htmlFor="temperature">Temperature</label>
                    <div className="input-group mt-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">{scale === 'C' ? '°C' : '°F'}</div>
                        </div>
                        <input id="temperature" type="number" className="form-control" name="temperature" value={schedule.temperature} onChange={(e) => handleOnChange('temperature', e.target.value)} />
                    </div>
                </div>
                <div className="form-group col-sm-6 mx-auto mt-4">
                    <button type="submit" className="btn btn-secondary px-4 mr-2" disabled={!isFormValid() ? 'disabled' : ''}>{editMode ? 'Update' : 'Create'} Schedule</button>
                    <Link to={'/'}><button type="button" className="btn btn-outline-secondary px-4">Cancel</button></Link>
                </div>
            </form>
        </div>
    )
}

export default Schedule;