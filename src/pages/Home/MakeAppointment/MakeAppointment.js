import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import Button from '../../../Shared/Button/Button';

const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='mt-32'>
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} alt='doctor' className="lg:w-1/2 hidden md:block -mt-32 rounded-lg" />
    <div className='text-white'>
        <h3 className='text-lg '>Appointment</h3>
      <h1 className="text-4xl font-bold">Make an appointment Today</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <Button>Appointment</Button>
    </div>
  </div>
</div>
        </section>
    );
};

export default MakeAppointment;