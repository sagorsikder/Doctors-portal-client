import React from 'react';
import Flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const cardData =[
        {
            id:1,
            name:'Flouride Treatment',
            details:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:Flouride
        },
        {
            id:2,
            name:'Cavity Filling',
            details:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:cavity
        },
        {
            id:3,
            name:'Teeth Whitening',
            details:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    
            img:whitening
        },
    ]
    return (
       <div>
        <div className='text-center mt-8'>

<h3 className='uppercase text-xl font-bold text-primary '>Our services</h3>
<h1 className='text-3xl font-semibold '>Service We Provide</h1>
        </div>
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card=><ServiceCard key={card.id} card={card}></ServiceCard>)
            }
        </div>
       </div>
    );
};

export default Services;