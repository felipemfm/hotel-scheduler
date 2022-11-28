import React from "react";
import HotelSelect from "../component/HotelSelect";
import RoomSelect from "../component/RoomSelect";
import Reservation from "../component/Reservation";

function Booking() {
  return (
    <div>
      <HotelSelect />
      <div className="row">
        <div className="col-4">
          <RoomSelect />
        </div>
        <div className="col">
          <Reservation />
        </div>
      </div>
    </div>
  );
}

export default Booking;
