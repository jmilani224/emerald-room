import React from 'react';

import cardStyles from './card.module.css'

const  Card = ({ emoji, title, children, AccordionItem, AccordionButton, AccordionPanel }) => {
    return (  
        <AccordionItem>
            <div className={cardStyles.card}>
                <AccordionButton>
                    <div className={cardStyles.headerGroup}>
                        <span className={cardStyles.emoji}>{emoji}</span>
                        <h2 className={cardStyles.listHeading}>{title}</h2>
                    </div>
                </AccordionButton>
                <div className={cardStyles.children}>
                <AccordionPanel>{children}</AccordionPanel>
                </div>
            </div>
        </AccordionItem>
    );
}
 
export default Card;