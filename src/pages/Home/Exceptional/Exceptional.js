import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import Button from '../../../Shared/Button/Button';

const Exceptional = () => {
    return (
        <div className="hero mt-8 w-3/4 mx-auto bg-base-100">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} alt='treatment' className="max-w-sm md:w-3/4 mx-5 rounded-lg shadow-2xl" />
    <div className='p-12'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
     <Button>Get Started</Button>
    </div>
  </div>
</div>
    );
};

export default Exceptional;