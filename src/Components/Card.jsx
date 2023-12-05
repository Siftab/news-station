import React from 'react';

const Card = ({props}) => {
    const {title,image_url}=props;
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure><img src={image_url}alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                
            </div>
        </div>
    );
};

export default Card;