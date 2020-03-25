import React from 'react';

import cardStyles from './card.module.css'

const  Card = (props) => {
    return (  
        <div className={cardStyles.card}>
            <div className={cardStyles.headerGroup}>
                <span className={cardStyles.emoji}>{props.emoji}</span>
                <h2 className={cardStyles.listHeading}>{props.title}</h2>
            </div>
            <div className={cardStyles.children}>
                {props.children}
            </div>
        </div>
    );
}
 
export default Card;