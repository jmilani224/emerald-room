import React from 'react'

import servicesStyles from "./services.module.css"
import Card from "./card.js"

const Services = () => {
    
    return (
        <div id="services" className={servicesStyles.servicesContainer}>
            <h1>Services</h1>
            <div className={servicesStyles.cardContainer}>  

                <Card title="Gents">
                    <ul>   
                        <li>Cut</li>
                        <li>Shampoo</li>
                        <li>Hot Lather Neck Shave</li>
                        <li>Back or Chest Trim</li>
                    </ul> 
                </Card>

                <Card title="Ladies">
                    <ul>   
                        <li>Ladies Cut</li>
                        <li>Girls Cut</li>
                        <li>Extension Consultation</li>
                        <li>Blowout & Style</li>
                    </ul> 
                </Card>

                <Card title="Massage">
                    <ul>   
                        <li>Scalp</li>
                        <li>Hot Stone</li>
                    </ul> 
                </Card>

                <Card title="Color">
                    <ul>   
                        <li>Babylights</li>
                        <li>Fantasy Color</li>
                        <li>Gent's Camouflage</li>
                        <li>Balayàge</li>
                        <li>Full Highlights</li>
                    </ul> 
                </Card>

                <Card title="Waxing">
                    <ul>   
                        <li>Brow Shaping</li>
                        <li>Back & Chest</li>
                        <li>Arms & Legs</li>
                        <li>Face</li>
                    </ul> 
                </Card>

                <Card title="Treatments">
                    <ul>   
                        <li>Herbal Paraffin Wax Hand Dip</li>
                        <li>Olaplex Treatment</li>
                        <li>Keratin Smoothing Treatment</li>
                    </ul> 
                </Card>

                <Card title="Cosmetics">
                    <ul>   
                        <li>Basic Makeup</li>
                        <li>Bridal & Bridesmaids</li>
                        <li>Prom & Homecoming</li>
                    </ul> 
                </Card>
            </div>     
    </div>    

    )
}

export default Services