import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const InfoCards = () => {
    const cardData =[
        {
            id:1,
            name:'Opening Hours',
            details:'Open 9:00 AM to 5:00 PM everyday',
            bgColor:'bg-primary',
            img:clock
        },
        {
            id:2,
            name:'Visit Our Location',
            details:'Mirpur,Dhaka,Bangladesh',
            bgColor:'bg-secondary',
            img:marker
        },
        {
            id:3,
            name:'Contact us now',
            details:'+8801726583097',
            bgColor:'bg-primary',
            img:phone
        },
    ]
    return (
        <div className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card=><InfoCard key={card.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;