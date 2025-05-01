

import React from 'react';
import './Card.css'

function Card({ src, title, description, price }) {
    return (
        <div className='card'>
            {/* Image dikhane ke liye */}
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                {/* Price yahaan show hoti hai */}
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card
