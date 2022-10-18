import React from "react";
import HotelSelect from "../component/HotelSelect";

function Booking() {
  return (
    <div classNames="row">
      <div classNames="col-4">
        <HotelSelect />
      </div>
      <div classNames="col-8"></div>
    </div>
  );
}

export default Booking;
