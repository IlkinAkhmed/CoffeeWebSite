import React from 'react'
import "./index.scss"
import Form from '../../components/Form'
import useFetchData from '../../hooks/UseFetchData'
import Loading from '../isLoading'
import Error from '../Error'

const Contact = () => {
  const {data, isLoading, error} = useFetchData("contact");
  return (
    <>
        {
          isLoading ? (
            <Loading />
          ) : error ? (
            <Error />
          ) : (
            <div>
          <div className='contact-main'>
              <h2>GET IN TOUCH</h2>
              <div className='home-slash-page'>
                <h6>HOME  /  </h6>
              <span>  CONTACT</span>
              </div>
          </div>
          <Form />
          <div style={{width: "100%"}}><iframe width="100%" height="510" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%C6%8Fsas%20bina,%2025%20H%C3%BCseyn%20Cavid%20Prospekti,%20Bak%C4%B1%201073+(Azerbaijan%20Technical%20University)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe></div>
        </div>
          )
        }
    </>
  )
}

export default Contact