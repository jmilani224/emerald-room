import React from 'react'

import bookStyles from "./book.module.css"

const BookFunc = () => {

    const widgetHTML = {__html: `<div id='frameTitle' class='embedded-widget-title' style='font-size: 23px; color: #333;font-family:Arial, Helvetica, sans-serif; line-height:24px; padding: 18px 10px 8px; text-align: center; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;'></div><div class="vagaro" style="width:250px; padding:0; border:0; margin:0 auto; text-align:center;"><style>.vagaro a {font-size:14px; color:#AAA; text-decoration:none;}</style><a href="https://sales.vagaro.com/">Powered by Vagaro</a>&nbsp;<a href="https://sales.vagaro.com/salon-software">Salon Software</a>,&nbsp;<a href="https://sales.vagaro.com/spa-software">Spa Software</a>&nbsp;&amp;&nbsp;<a href="https://sales.vagaro.com/fitness-software">Fitness Software</a><script type="text/javascript" src="https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqnCJ4nEJacT3qmV35y6RuSdBuOc1WJD1wOc1WO61CxdfeJE1wgEJgoapOUc8?v=tnw3s6hgSjfV7zJtLmYzC0w4zHwCUxRnJ7AVVViQa3qW#"></script></div>`}

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
        <div dangerouslySetInnerHTML={widgetHTML} className="vagaro"> 
        </div>
      </div>
    )
}
export default BookFunc