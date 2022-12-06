import React from 'react';

const Button = ({children}) => {
    return (
        <button className="btn border-none bg-gradient-to-r from-primary to-secondary text-white ">{children}</button>
    );
};

export default Button;