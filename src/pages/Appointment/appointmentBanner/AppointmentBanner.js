import {React} from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selected,setSelectedDate}) => {

        
    return (
        <header className='my-6'>
            <div className="hero  bg-base-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} alt='banner' className=" w-full lg:h-3/4 lg:w-1/2" />
    <div className='mr-6'>
     <DayPicker
     
     mode="single"
     selected={selected}
     onSelect={setSelectedDate}
     />
     
    </div>
  
  </div>
</div>
        </header>
    );
};

export default AppointmentBanner;