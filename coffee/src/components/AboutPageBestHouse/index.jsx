import React from 'react'
import "./index.scss"

function BestHouse() {
    return (
        <div className="coffee-house">
            <img className='bg-img1' src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/about-shape-2-1.png" alt="" />
            <img className='bg-img2' src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/about-shape-2-2.png" alt="" />
            <div className="coffee-house-inner">
                <div className="profile-img">

                    <div className="big-img">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-1.png" alt="" />
                        <div className="small-img">

                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="coffee-house-texts">
                    <span>ABOUT CAFENA</span>
                    <p className='one-best'>ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN</p>
                    <p className='mauris'>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibhtincidunt.</p>
                    <div className="dummy">
                        <i className="fa-solid fa-check"></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="dummy">
                        <i className="fa-solid fa-check"></i>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="dummy">
                        <i className="fa-solid fa-check"></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BestHouse