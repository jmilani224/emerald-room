import React, { Component } from 'react'

import bookStyles from "./book.module.css"

class Book extends Component {
  
  
  componentDidMount(){
    const script=document.createElement('script')
<<<<<<< HEAD
    script.src="https://www.vagaro.com/resources/WidgetEmbeddedLoader/OZqnCJ4nEJacT3qmV35y6JuPlXoSlXYO61Cq7fYO61WO4pkUcPCu7gevEhAJDXwOW?v=zxOBNHDBQpkWELAcx8OJg8LPozVGMfY9neinaAn9jw1#"
=======
    script.src=`https://www.vagaro.com/resources/WidgetEmbeddedLoader/OZqnCJ4nEJacT3qmV35y6JuPlXoSlXYO61Cq7fYO61WO4pkUcPCu7gevEhAJDXwOW?v=zxOBNHDBQpkWELAcx8OJg8LPozVGMfY9neinaAn9jw1#?r=${Math.floor(Math.random() * 9999)}`
>>>>>>> master
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