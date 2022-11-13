import React from "react";
import HotelSelect from "../component/HotelSelect";
import RoomSelect from "../component/RoomSelect";
function Booking() {
  return (
    <div>
      <HotelSelect />
      <div className="row">
        <div className="col">
          <RoomSelect />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Booking;
