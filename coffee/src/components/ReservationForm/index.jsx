import React, { useState } from "react";
import "./index.scss";
import axios from "axios";
import useFetchData from "../../hooks/UseFetchData";
import Swal from "sweetalert2";

const ReservationForm = () => {
  const { data } = useFetchData("reservation");
  const [reservationData, setReservationData] = useState({
    name: "",
    number: "",
    seates: "",
    date: "",
    time: "",
    email: "",
  });

  const handleChange = (e) => {
    setReservationData({ ...reservationData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/reservation", reservationData);
      Swal.fire({
        title: "Your Reservation Completed Successfully!",
        icon: "success",
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form-main-container">
      <form onSubmit={handleSubmit}>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "55px",
            fontWeight: "500",
          }}
        >
          RESERVATION FORM
        </h1>
        <div className="name-input">
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          <input
            id="number"
            type="text"
            placeholder="Enter your number"
            onChange={handleChange}
          />
        </div>
        <div className="name-input">
          <input
            id="seates"
            type="text"
            placeholder="Seates*"
            onChange={handleChange}
          />
          <input
            id="date"
            type="date"
            placeholder="dd/mm/yyyy"
            onChange={handleChange}
          />
        </div>
        <div className="name-input">
          <input
            id="time"
            type="text"
            placeholder="Time"
            onChange={handleChange}
          />
          <input
            id="email"
            type="text"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>
        <button type="submit">SUBMIT YOUR REQUEST</button>
      </form>
    </div>
  );
};

export default ReservationForm;
