import React, { useState, useEffect, useRef } from 'react'

import bookStyles from "./book.module.css"

const BookFunc = () => {

  const [widgetLoading, setWidgetLoading] = useState(true)

  const widget = useRef()

  async function loadWidget() {
    const script=document.createElement('script')
    script.type = "text/javascript"
    script.src="https://www.vagaro.com/resources/WidgetEmbeddedLoader/OZqnCJ4nEJacT3qmV35y6JuPlXoSlXYO61Cq7fYO61WO4pkUcPCu7gevEhAJDXwOW?v=zxOBNHDBQpkWELAcx8OJg8LPozVGMfY9neinaAn9jw1#?r=SOME_RANDOM_VALUE"
    script.async=true;
    await widget.current.appendChild(script)
    setWidgetLoading(false)
  }

  useEffect(() => {
    loadWidget()
  }, [])

  useEffect(() => {
    !widgetLoading && console.log('done loading')
  }, [widgetLoading])

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