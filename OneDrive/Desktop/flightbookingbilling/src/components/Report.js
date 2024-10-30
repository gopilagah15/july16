import React from "react";

const Report = ({ passengers }) => {
  const totalRevenue = passengers.reduce((acc, passenger) => {
    const baseFare = 100;
    const serviceCharges = {
      baggage: 30,
      meals: 15,
    };
    const total = baseFare + (passenger.services.baggage ? serviceCharges.baggage : 0) + 
                  (passenger.services.meals ? serviceCharges.meals : 0);
    return acc + total;
  }, 0);

  const occupancy = passengers.length;

  return (
    <div>
      <h3>Report</h3>
      <p>Total Passengers: {occupancy}</p>
      <p>Total Revenue: ${totalRevenue}</p>
    </div>
  );
};

export default Report;
