import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelData, setHotelId } from "../store/slice/bookingSlice";

function HotelSelect() {
  const dispatch = useDispatch();
  const hotelData = useSelector((state) => state.booking.hotels);
  const [hotel, setHotel] = useState("");

  useEffect(() => {
    dispatch(fetchHotelData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="input-group w-50 m-5 align-items-center mx-auto">
      <select
        className="form-select "
        onChange={(e) =>
          e.target.value !== "Select a Hotel" && setHotel(e.target.value)
        }
      >
        <option defaultValue>Select a Hotel</option>
        {hotelData.map((element) => (
          <option key={element.id} value={element.id}>
            {element.name}
          </option>
        ))}
      </select>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => dispatch(setHotelId(hotel))}
      >
        Select
      </button>
    </div>
  );
}

export default HotelSelect;
