import React from "react";
import HotelSelect from "../component/HotelSelect";

function Booking() {
  return (
    <div className="row">
      <div className="col-4">
        <HotelSelect />
      </div>
      <div className="col-8"></div>
    </div>
  );
}

export default Booking;
