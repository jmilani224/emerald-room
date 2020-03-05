import React from 'react'

import locStyles from "./loc.module.css"
import GoogleMapReact from 'google-map-react'

const Loc = () => {
    
    return (
        <div id="loc" className={locStyles.locContainer}>
            <h1 className={locStyles.locH1}>Location</h1>
               <div className={locStyles.main}>
                   
                   <div className={locStyles.left}>
                        <div className={locStyles.conNode}>
                            <h2 className={locStyles.head}>Address</h2>
                            <p className={locStyles.par}>
                            15721 Madison Ave. <br />
                            Lakewood, Ohio 44107 <br />
                            <a className={locStyles.phone} href="tel:(216) 339-9978">(216) 339-9978</a>
                            </p>
                        </div>

                        <div className={locStyles.conNode}>
                            <h2 className={locStyles.head}>Hours</h2>
                            <table className={locStyles.hoursTable}>
                            <tr>
                                <td>Sun</td>
                                <td>Closed</td>
                            </tr>
                            <tr>
                                <td>Mon - Tues</td>
                                <td>10AM - 7PM</td>
                            </tr>
                            <tr>
                                <td>Wed - Thurs</td>
                                <td>10AM - 8PM</td>
                            </tr>
                            <tr>
                                <td>Fri</td>
                                <td>9AM - 8PM</td>
                            </tr>
                            <tr>
                                <td>Sat</td>
                                <td>9AM - 5PM</td>
                            </tr>
                            </table>
                        </div> 
                    </div>
                    
                    <div id="map" className={locStyles.right}>
                            {(
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyCWYgTnvAA3trKR7dFgpnGmBh-vAoM2OXA' }}
                                defaultCenter={[41.4768626, -81.8081993]}
                                defaultZoom={14}
                            >
                                <div
                                className={locStyles.marker}
                                lat={41.4768626}
                                lng={-81.8081993}
                                />
                            </GoogleMapReact>
                            )}
                    </div>
            </div>
        </div>
    )
}

export default Loc