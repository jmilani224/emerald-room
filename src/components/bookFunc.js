import React, { useState, useEffect, useRef } from 'react'

import bookStyles from "./book.module.css"

const BookFunc = () => {

  const widget = useRef()
  const [widgetLoaded, setWidgetLoaded] = useState(false)

  async function loadWidget() {
    const script=document.createElement('script')
    script.src="https://www.vagaro.com/resources/WidgetEmbeddedLoader/OZqnCJ4nEJacT3qmV35y6JuPlXoSlXYO61Cq7fYO61WO4pkUcPCu7gevEhAJDXwOW?v=zxOBNHDBQpkWELAcx8OJg8LPozVGMfY9neinaAn9jw1#"
    script.async=true;
    await widget.current.appendChild(script)
    
    const vigaroWidget = document.querySelector('vagaro-container')
    setWidgetLoaded(!!vigaroWidget)
  }

  useEffect(() => {
    loadWidget()
  }, [])

  console.log(widgetLoaded)

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
        <div ref={widget} className="vagaro">
        </div>
      </div>
    )
}
export default BookFunc