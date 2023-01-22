import {React,useState} from 'react';
import AppointmentAvailable from './AppointmentAvailable';
import useTitle from '../../Hooks/useTitle'

import AppointmentBanner from './appointmentBanner/AppointmentBanner';

const Appointment = () => {
    useTitle('Appointment')
    const [selectedDate,setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner selected={selectedDate} setSelectedDate={setSelectedDate} ></AppointmentBanner>
           <AppointmentAvailable selected={selectedDate}></AppointmentAvailable>
        </div>
    );
};

export default Appointment;