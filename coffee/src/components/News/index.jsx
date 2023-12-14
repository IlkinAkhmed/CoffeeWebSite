import React from 'react'
import "./index.scss"
import useFetchData from '../../hooks/UseFetchData'
import { Link } from 'react-router-dom'

const News = () => {
  const { data } = useFetchData('news-Article')
  console.log(data);
  return (
    <section id='news'>
      <div className="news-head">
        <span className='from'>FROM OUR BLOG</span>
        <h2>OUR NEWS &  ARTICLES</h2>
      </div>
      <div className="newswrapper">
        {data && data.map(x => {
          return <div className="newscard">
            <div className="newsimage">
              <img src={x.img} alt="" />
            </div>
            <div className="newstexts">
              <p>BY: <span>RASALINA \ LIFE \ 23.01.2017</span></p>
              <p>{x.description}</p>
              <Link className='newsLink'>READ MORE <i class="fa-solid fa-arrow-right-long"></i></Link>
            </div>
          </div>
        })}

      </div>
    </section>
  )
}

export default News