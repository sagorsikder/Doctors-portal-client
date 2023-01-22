import React from 'react';
import useTitle from '../../Hooks/useTitle';

const ContactUs = () => {

    useTitle('Contact')
    return (
        <div>
            <h1>This is contact page.</h1>
            <h1 className='text-5xl font-bold text-center mt-10 shadow'>Comming soon</h1>
        </div>
    );
};

export default ContactUs;