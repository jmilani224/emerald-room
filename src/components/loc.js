import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import locStyles from "./loc.module.css"

const Map = React.lazy(() => import('./element-components/map'));

const Loc = () => {
  
  const data = useStaticQuery(graphql`
  {
    markdownRemark(frontmatter: {title: {eq: "location"}}) {
      frontmatter {
        h1
        hours {
          fri
          mon_tue
          sat
          sun
          wed_thu
        }
      }
    html  
    }
  }
  `)

  return (
        <div id="loc" className={locStyles.container}>
        <h1 className={locStyles.locH1}>{data.markdownRemark.frontmatter.h1}</h1>
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
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Map />
                </React.Suspense>
                </div>

          </div>

        </div>
    )

}
  
  export default Loc