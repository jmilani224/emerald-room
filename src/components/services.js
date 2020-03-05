import React from 'react'

import servicesStyles from "./services.module.css"

const Services = () => {
    
    return (
        <div id="services" className={servicesStyles.servicesContainer}>
            <h1 className={servicesStyles.servicesH1}>A Sampling of Services</h1>

            <table className={servicesStyles.servicesTable}>
                <tbody>
                    <tr>
                        <th>Gents</th>
                        <th>Ladies</th>
                        <th>Massage</th>
                        <th>Color</th>
                        <th>Waxing</th>
                        <th>Treatments</th>
                        <th>Cosmetics</th>
                    </tr>
                    <tr>
                        <td>Cut</td>
                        <td>Ladies Cut</td>
                        <td>Scalp</td>
                        <td>Babylights</td>
                        <td>Brow Shaping</td>
                        <td>Herbal Paraffin Wax Hand Dip</td>
                        <td>Basic Makeup</td>
                    </tr>
                    <tr>
                        <td>Shampoo</td>
                        <td>Girls Cut</td>
                        <td>Hot Stone</td>
                        <td>Fantasy Color</td>
                        <td>Back & Chest</td>
                        <td>Olaplex Treatment</td>
                        <td>Bridal & Bridesmaids</td>
                    </tr>
                    <tr>
                        <td>Hot Lather Neck Shave</td>
                        <td>Extension Consultation</td>
                        <td></td>
                        <td>Gent's Camouflage</td>
                        <td>Arms & Legs</td>
                        <td>Keratin Smoothing Treatment</td>
                        <td>Prom & Homecoming</td>
                    </tr>
                    <tr>
                        <td>Back or Chest Trim</td>
                        <td>Blowout & Style</td>
                        <td></td>
                        <td>Balayàge</td>
                        <td>Face</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Full Highlights</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                </table>
        </div>    

    )
}

export default Services