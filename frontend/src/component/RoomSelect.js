import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomData, setRoomObj } from "../store/slice/bookingSlice";
import roomImg from "../images/room.jpg";

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
      {roomData &&
        roomData.map((element) => (
          <div key={element.id} className="mb-5">
            {element.hotel === hotelObj.id && (
              <div
                className="card"
                onClick={() => dispatch(setRoomObj(element))}
              >
                <img src={roomImg} className="card-img-top" alt="room option" />
                <div className="card-body">
                  <p className="card-text text-center fs-3">
                    {element.room_number}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default RoomSelect;
