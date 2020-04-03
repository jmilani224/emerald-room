import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import servicesStyles from "./services.module.css"
import Card from "./element-components/card.js"
const ImgGallery = React.lazy(() => import('./element-components/imggallery'));

const Services = () => {

    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {frontmatter: {class: {eq: "service-card"}}},
        sort: {fields: frontmatter___order, order: ASC}) {
        edges {
          node {
            html
            frontmatter {
              title
              emoji
            }
          }
        }
      }
    }
  `)
    return ( 
        <div className={servicesStyles.gallery}>
            <div id="services" className={servicesStyles.servicesContainer}>
                <h1>Services</h1>
                <div className={servicesStyles.cardContainer}>  
                {data.allMarkdownRemark.edges.map(card => (
                    <Card emoji={card.node.frontmatter.emoji} title={card.node.frontmatter.title}>
                        <div dangerouslySetInnerHTML={{__html:card.node.html}}>
                        </div>
                    </Card>
                ))}
                </div>
            </div>
            <React.Suspense fallback={<div>Loading...</div>}>
              <ImgGallery /> 
            </React.Suspense>
        </div>       
    )

}

export default Services