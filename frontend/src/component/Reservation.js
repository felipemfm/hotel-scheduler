import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";

function Reservation() {
  const roomObj = useSelector((state) => state.booking.roomObj);
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <h1>Make a Reservation</h1>
      {roomObj.room_number ? (
        <>
          <div className="card my-4">
            <div className="card-body">
              <p className="card-text text-center fs-3">
                You selected room number {roomObj.room_number}
              </p>
            </div>
          </div>
          <h3>Select a day for you reservation</h3>
          <div className="d-flex justify-content-center my-4">
            <Calendar onChange={onChange} value={value} />
          </div>
        </>
      ) : (
        <h4>Please select a room.</h4>
      )}
    </div>
  );
}

export default Reservation;
