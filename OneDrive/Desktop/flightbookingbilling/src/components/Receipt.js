import React from "react";

const Receipt = ({ passenger }) => {
  const baseFare = 100; // Basic fare for all passengers
  const serviceCharges = {
    baggage: 30,
    meals: 15,
  };

  const total = baseFare + (passenger.services.baggage ? serviceCharges.baggage : 0) + 
                (passenger.services.meals ? serviceCharges.meals : 0);

  return (
    <div>
      <h3>Receipt</h3>
      <p>Passenger: {passenger.name}</p>
      <p>Flight: {passenger.flight}</p>
      <p>Seat: {passenger.seat}</p>
      <p>Base Fare: ${baseFare}</p>
      <p>Extra Baggage: ${passenger.services.baggage ? serviceCharges.baggage : 0}</p>
      <p>Meal Service: ${passenger.services.meals ? serviceCharges.meals : 0}</p>
      <h4>Total: ${total}</h4>
    </div>
  );
};

export default Receipt;
