import React from 'react';

const InfoCard = ({card}) => {

    const {name,img,bgColor,details} = card;
    return (
        <div className={`card md:card-side ${bgColor} p-6 shadow-xl`}>
  <figure><img src={img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    
  </div>
</div>
    );
};

export default InfoCard;