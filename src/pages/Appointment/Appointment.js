import {React,useState} from 'react';
import AppointmentAvailable from './AppointmentAvailable';

import AppointmentBanner from './appointmentBanner/AppointmentBanner';

const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner selected={selectedDate} setSelectedDate={setSelectedDate} ></AppointmentBanner>
           <AppointmentAvailable selected={selectedDate}></AppointmentAvailable>
        </div>
    );
};

export default Appointment;