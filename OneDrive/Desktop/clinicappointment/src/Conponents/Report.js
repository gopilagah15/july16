// components/Report.js
import React from "react";

const Report = ({ appointments }) => {
  const totalRevenue = appointments.reduce((total, appointment) => total + appointment.billing, 0);

  return (
    <div>
      <h2>Daily Report</h2>
      <p>Total Appointments: {appointments.length}</p>
      <p>Total Revenue: ${totalRevenue.toFixed(2)}</p>
    </div>
  );
};

export default Report;
