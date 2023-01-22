
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Modal = ({treatment,select,refetch}) => {
    const {name,slots} = treatment;
    const {user} = useContext(AuthContext)

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target;
        const patientName = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate : select,
            treatment : name,
            email,
            phone,
            patient : patientName,
            slot
        }


        fetch('https://doctors-portal-server-ten-ecru.vercel.app/bookings',{
            method : 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)

            if(data.acknowledged){

                alert('Booking successfully')
                refetch();
            }

            else{
                alert(data.message)
            }
           
        })

      

    }
   
    return (
        <div>
            
            <input type="checkbox" id="book-appointment" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="book-appointment" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
    
    <form onSubmit={handleBooking} className='grid gap-5 grid-cols-1'>
    <input type="text" value={select} disabled className="input w-full input-bordered" />
    <select name='slot' className="select select-bordered w-full">
   
    
    {
        slots?slots.map((slot,i)=> <option className='input-bordered' key={i} value={slot} >{slot}</option>):""
    }
    </select>
    <input name='name'  type="text"  defaultValue={user?.displayName} placeholder="Type here" className="input w-full input-bordered" />
    <input name='email' type="email" defaultValue={user?.email} placeholder="Type here" readOnly disabled className="input w-full input-bordered" />
    <input name='phone' type="number" placeholder="Type here" className="input w-full input-bordered" />
    <br />
    <input name='submit' className='btn w-full btn-primary' type="submit" value="Submit" />
    </form>
  </div>
</div>


        </div>
    );
};

export default Modal;