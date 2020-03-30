import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import popupStyles from "./popup.module.css"


const PopUp = (props) => {
    const data = useStaticQuery(graphql`
    {
    markdownRemark(frontmatter: {title: {eq: "pop-up"}}) {
        frontmatter {
        title
        show
        }
        html
    }

    }
    `)  
    const initialModalState = {open: data.markdownRemark.frontmatter.show}
    const [modal, setModal] = useState(initialModalState)

    const handleModal = event => {
        setModal({open: false})
    }

    return (
        <div className={modal.open ? popupStyles.containerOpen : popupStyles.containerClosed}>
            <div className={popupStyles.box}>
                <div className={popupStyles.x} onClick={handleModal}>X</div>
                <div dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}>
                </div>
            </div>
        </div>
    )
}

export default PopUp