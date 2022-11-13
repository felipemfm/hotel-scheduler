import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomData, setRoomObj } from "../store/slice/bookingSlice";

function RoomSelect() {
  const dispatch = useDispatch();
  const roomData = useSelector((state) => state.booking.rooms);
  const hotelObj = useSelector((state) => state.booking.hotelObj);

  useEffect(() => {
    if (hotelObj.id) dispatch(fetchRoomData(hotelObj.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotelObj]);

  return (
    <div>
      <h1>Select a Room</h1>
      <div className="card">
        <ul className="list-group list-group-flush">
          {roomData &&
            roomData.map((element) => {
              return element.hotel === hotelObj.id ? (
                <li key={element.id} className="list-group-item">
                  {element.room_number}
                </li>
              ) : null;
            })}
        </ul>
      </div>
    </div>
  );
}

export default RoomSelect;
