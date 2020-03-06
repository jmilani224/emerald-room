import React, { Component } from 'react'

import bookStyles from "./book.module.css"

class Book extends Component {
  
  
  componentDidMount(){
    const script=document.createElement('script')
    script.src="https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqnCJ4nEJacT3qmV35y6RuSdBuOc1WJD1wOc1WO61CxdfcJE1wgEJgoapOUcO?v=dc42PPWPeOGyAIETZNYNuyvQVlBOKGrCEiz3PTpqLTSW#"
    script.async=true;
    this.instance.appendChild(script)
    
  }
  render() {
    return (
      <div id="book" className={bookStyles.bookContainer}>
        <h1 className={bookStyles.bookH1}>Book an Appointment</h1>
        <div
          id="frameTitle"
          className="embedded-widget-title"
          style={{
            textAlign:'center',
            boxSizing:'border-box',
            width: '100vw'
          }}
        >
        </div>
        <div ref={el => (this.instance = el)} className="vagaro">
        </div>
      </div>
    )
  }
}
export default Book