import React from 'react'
import "./index.scss"

function BestService() {
    return (
        <section id='best-service'>
            <div className="service-head">
                <span>WHY CHOOSE US</span>
                <p>WE PROVIDE BEST SERIVICE IN YOUR CITY</p>
            </div>
            <div className="service-wrapper">
                <div className="service-card">
                    <div className="card-logo">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-1.png" alt="" />
                        <div className="bg"></div>
                    </div>
                    <div className="card-texts">
                        <p>testy coffee recipe</p>
                        <span>Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.</span>
                        <i className='fa-solid fa-arrow-right-long'></i>
                    </div>
                </div>
                <div className="service-card">
                    <div className="card-logo">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-2.png" alt="" />
                        <div className="bg"></div>
                    </div>
                    <div className="card-texts">
                        <p>great location</p>
                        <span>Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.</span>
                        <i className='fa-solid fa-arrow-right-long'></i>
                    </div>
                </div>
                <div className="service-card">
                    <div className="card-logo">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-3.png" alt="" />
                        <div className="bg"></div>
                    </div>
                    <div className="card-texts">
                        <p>professional schef</p>
                        <span>Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.</span>
                        <i className='fa-solid fa-arrow-right-long'></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestService