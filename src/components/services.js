import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import servicesStyles from "./services.module.css"
import Card from "./element-components/card.js"
import ImgGallery from './element-components/imggallery'

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
              class
              emoji
            }
          }
        }
      }
    }
  `)
    return ( 
        <div>
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
        <ImgGallery />
        </div>       
    )

}

export default Services