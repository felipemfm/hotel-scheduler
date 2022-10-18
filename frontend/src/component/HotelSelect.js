import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelData } from "../store/slice/bookingSlice";

function HotelSelect() {
  const dispatch = useDispatch();
  const hotelData = useSelector((state) => state.booking.hotel);

  useEffect(() => {
    dispatch(fetchHotelData(""));
  }, []);

  return (
    <select className="form-select" aria-label="Default select example">
      <option defaultValue>Select a Hotel</option>
      {hotelData.map((element) => (
        <option key={element.id} value={element.id}>
          {element.name}
        </option>
      ))}
    </select>
  );
}

export default HotelSelect;
