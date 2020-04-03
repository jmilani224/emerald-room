import React from 'react'
import GoogleMapReact from 'google-map-react'
import locStyles from "../loc.module.css"

const Map = () => {
    return (
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
    )
}

export default Map
