import React from 'react';

const TestimonialCard = ({card}) => {
    const {details,name,img,address} = card;
    return (
        <div className='p-3 m-3'>
            <p className='mb-5'>{details}</p>
            <div className='flex '>
                <img className='p-3 w-[70px]' src={img} alt="" />
                <div className='ml-3'>
                    <h3 className='text-xl font-semibold text-primary'>{name}</h3>
                    <h3 className='text-lg'>{address}</h3>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;