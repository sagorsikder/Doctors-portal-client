import { useQuery } from '@tanstack/react-query';
import {React,useContext} from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyAppointment = () => {
    const {user} = useContext(AuthContext)
    const url = `https://doctors-portal-server-ten-ecru.vercel.app/bookings?email=${user?.email}`;

    const {data:bookings=[]} = useQuery({
        queryKey:['bookings',user?.email],
        queryFn:async()=>{
            const res = await fetch(url,{
              headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
              }
            })
            const data = await res.json()
            return data;
        }
    })


    return (
        <div>
            <h1 className='text-3xl mb-5'>My appointment.</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>

      </tr>
    </thead>
    <tbody>
    
     {
        bookings.map((booking,i) =>
         <tr key={booking._id}>
        <th>{i+1}</th>
        <td>{booking.patient}</td>
        <td>{booking.treatment}</td>
        <td>{booking.appointmentDate}</td>
        <td>{booking.slot}</td>

      </tr>)
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;