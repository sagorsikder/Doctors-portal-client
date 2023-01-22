import React from 'react';
import useTitle from '../../Hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error')
    return (
        <div>
            <h1>This is Error page.</h1>
        </div>
    );
};

export default ErrorPage;