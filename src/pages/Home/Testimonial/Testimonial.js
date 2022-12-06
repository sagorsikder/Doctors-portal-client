import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const cardData = [
        {
            id:1,
            name: 'Watson',
            details : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque blanditiis aspernatur sapiente iusto earum ipsam distinctio vel accusantium, quas labore?',
            img:people1,
            address: 'America'

        },
        {
            id:2,
            name: 'William',
            details : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque blanditiis aspernatur sapiente iusto earum ipsam distinctio vel accusantium, quas labore?',
            img:people2,
            address: 'Australia'

        },
        {
            id:1,
            name: 'cruise',
            details : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque blanditiis aspernatur sapiente iusto earum ipsam distinctio vel accusantium, quas labore?',
            img:people3,
            address: 'Canada'

        }
    ]
    return (
    <section className='mt-8'>
        <div className='flex justify-between'>
            <div>
            <h4 className='text-lg font-bold text-secondary'>Testimonial</h4>
            <h1 className='text-4xl '>What Our Patients Says</h1>
            </div>

            <div>

            <img className='w-24 lg:w-48' src={quote} alt="" />
            </div>
        </div>
      <div  className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
         
       {
        cardData.map(card=><TestimonialCard key={card.id} card={card}></TestimonialCard>)
       }
      </div>

    </section>
    );
};

export default Testimonial;