import React from 'react';

const AppointmentOption = ({option,setTreatment}) => {

    const{name,slots} = option;
    return (
        <div className="card  shadow-xl">
  <div className=" card-body">
    <h2 className="card-title text-secondary justify-center">{name}</h2>
    <p className='text-center'>{slots[0]}</p>
    <p className='text-center'>{slots.length} {slots.length<2?'space':'spaces'} available.</p>
    <div className="card-actions justify-center">
    
      <label onClick={()=>setTreatment(option)} htmlFor="book-appointment" className="btn btn-primary uppercase">book available</label>
    </div>
  </div>
</div>
    );
};

export default AppointmentOption;