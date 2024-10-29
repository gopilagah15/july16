// App.js
import React, { useState } from "react";
import AppointmentForm from "./Conponents/AppointmentForm";
import Receipt from "./Conponents/Receipt";
import Report from "./Conponents/Report";
 

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);
  const [currentReceipt, setCurrentReceipt] = useState(null);

  const handleAddAppointment = (appointment) => {
    setAppointments((prev) => [...prev, appointment]);
    setShowReceipt(true);
    setCurrentReceipt(appointment); // Prepare the receipt for the new appointment
  };

  return (
    <div>
      <h1>Clinic Appointment & Billing System</h1>
      <AppointmentForm onAddAppointment={handleAddAppointment} />
      {showReceipt && <Receipt appointment={currentReceipt} />}
      <Report appointments={appointments} />
    </div>
  );
};

export default App;
