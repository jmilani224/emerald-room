import React from 'react';

import cardStyles from './card.module.css'

const  Card = (props) => {
    return (  
        <div className={cardStyles.card}>
            <h2 className={cardStyles.listHeading}>{props.title}</h2>
            <div className={cardStyles.children}>
                {props.children}
            </div>
        </div>
    );
}
 
export default Card;