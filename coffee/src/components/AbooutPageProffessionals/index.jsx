import React from 'react'
import "./index.scss"

function Professionals() {
    return (
        <section id='professionals'>
            <div className="professionals-head">
                <span>OUR CHEFS</span>
                <p>MEET OUR professionalS</p>
            </div>
            <div className="professionals-wrapper">
                <div className="professionals-card">
                    <div className="professionals-img">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/team/team-1.jpeg" alt="" />
                        <div className="pr-social-media">
                            <i class="fa-solid   fa-plus"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                        <div className="professionals-texts">
                            <p>RASALINA DE WILLAMSON</p>
                            <span>12 YEARS EXPERIENCE</span>
                        </div>
                    </div>
                </div>
                <div className="professionals-card">
                    <div className="professionals-img">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/team/team-2.jpeg" alt="" />
                        <div className="pr-social-media">
                            <i class="fa-solid   fa-plus"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                        <div className="professionals-texts">
                            <p>ALEXTINA JIMIEY</p>
                            <span>09 YEARS EXPERIENCE</span>
                        </div>
                    </div>
                </div>
                <div className="professionals-card">
                    <div className="professionals-img">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/team/team-3.jpeg" alt="" />
                        <div className="pr-social-media">
                            <i class="fa-solid   fa-plus"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                        <div className="professionals-texts">
                            <p>JIMMEY AENDERSON</p>
                            <span>06 YEARS EXPERIENCE</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Professionals