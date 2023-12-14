import React from 'react'
import "./index.scss"

const CoffeeMachine = () => {
  return (
    <section id='coffee-machine'>
      <div className="container">
        <div className="texts">
          <h2>COFFEE MACHINE,BUY FOR HOME</h2>
          <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat.
            mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis.</p>
          <button className="beige-button">DISCOVER NOW</button>
        </div>
        <div className="image">
          <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/product-big.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default CoffeeMachine