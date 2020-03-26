import React from "react"
import { StaticQuery, graphql } from "gatsby"

import locStyles from "./loc.module.css"
import GoogleMapReact from 'google-map-react'

const Loc = () => (
  
  <StaticQuery
  query={graphql`
  {
    markdownRemark(frontmatter: {title: {eq: "location"}}) {
      frontmatter {
        hours {
          fri
          mon_tue
          sat
          sun
          wed_thu
        }
      }
    }
  }
`}
      render={data => 
        <div id="loc" className={locStyles.container}>
        <h1 className={locStyles.locH1}>Location</h1>
            <div className={locStyles.main}>
                
                <div className={locStyles.left}>
                    <div className={locStyles.conNode} dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}>
                    </div>

                    <div className={locStyles.conNode}>
                        <h2 className={locStyles.head}>Hours</h2>
                        <table className={locStyles.hoursTable}>
                        <tr>
                            <td>Sun</td>
                            <td>{data.markdownRemark.frontmatter.hours.sun}</td>
                        </tr>
                        <tr>
                            <td>Mon - Tues</td>
                            <td>{data.markdownRemark.frontmatter.hours.mon_tue}</td>
                        </tr>
                        <tr>
                            <td>Wed - Thurs</td>
                            <td>{data.markdownRemark.frontmatter.hours.wed_thu}</td>
                        </tr>
                        <tr>
                            <td>Fri</td>
                            <td>{data.markdownRemark.frontmatter.hours.fri}</td>
                        </tr>
                        <tr>
                            <td>Sat</td>
                            <td>{data.markdownRemark.frontmatter.hours.sat}</td>
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

      </div>}
    ></StaticQuery>

  )
  
  export default Loc