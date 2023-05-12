import React from "react";
import { removeReservation } from "../features/reservationSlice";
import { useDispatch } from "react-redux";

const ReservationCard = ({ name, index }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
};

export default ReservationCard;
