import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import  {React, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Modal from '../../Shared/Modal/Modal';
import AppointmentOption from './AppointmentOption/AppointmentOption';

const AppointmentAvailable = ({selected}) => {

    const [treatment,setTreatment] = useState({})
    const date = format(selected,'PP')


    const { data:appointmentOptions = [],refetch,isLoading } = useQuery({
        queryKey : ['options',date],
        queryFn : async()=> {
         const res =  await fetch(`https://doctors-portal-server-ten-ecru.vercel.app/options?date=${date}`)
         const data = await res.json();
         return data;
        }
    })


    if(isLoading){
        <Loading></Loading>
    }

   

   
    return (
        <section className='mt-12'>
            <p className='text-center font-semibold text-secondary text-lg my-5'>Appointment date : {date}</p>

           <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
                appointmentOptions.map(apn=><AppointmentOption key={apn._id} setTreatment={setTreatment} option={apn}></AppointmentOption>)
            }
           </div>
           <Modal select={date} refetch={refetch} treatment={treatment}></Modal>
        </section>
    );
};

export default AppointmentAvailable;