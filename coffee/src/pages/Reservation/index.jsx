import React from 'react'
import "./index.scss"
import ReservationForm from '../../components/ReservationForm'
import useFetchData from '../../hooks/UseFetchData'
import Loading from '../isLoading'
import Error from '../Error'

const Reservation = () => {
  const { data, isLoading, error } = useFetchData("reservation")
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
                    <h2>RESERVATION</h2>
                    <div className='home-slash-page'>
                      <h6>HOME/</h6>
                      <span>MENU</span>
                    </div>
              </div>
              <ReservationForm />
          </div>
        )
      }
    </>
  )
}

export default Reservation