// components/Receipt.js
import React from "react";

const Receipt = ({ appointment }) => {
  return (
    <div>
      <h2>Appointment Receipt</h2>
      <p>Patient Name: {appointment.patientName}</p>
      <p>Doctor Name: {appointment.doctorName}</p>
      <p>Appointment Date: {appointment.appointmentDate}</p>
      <p>Billing Amount: ${appointment.billing.toFixed(2)}</p>
    </div>
  );
};

export default Receipt;
