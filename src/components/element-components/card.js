import React, { useState, useRef } from 'react';
import { VscTriangleDown } from 'react-icons/vsc';


import cardStyles from './card.module.css'

const  Card = ({ emoji, title, children, AccordionItem, AccordionButton, AccordionPanel }) => {

    const [arrowSpin, setArrowSpin] = useState(false)
    const handleSpin = () => {
        setArrowSpin(!arrowSpin)
    }

    return (  
        <AccordionItem>
            <div className={cardStyles.card}>
                <AccordionButton onClick={handleSpin}>
                    <div className={cardStyles.headerGroup}>
                        <span className={cardStyles.emoji}>{emoji}</span>
                        <h2 className={cardStyles.listHeading}>{title}</h2>
                            {/* <VscTriangleDown className={arrowSpin ? cardStyles.arrowUp : cardStyles.arrowDown}/> */}
                            <VscTriangleDown className={cardStyles.triangle}/>

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