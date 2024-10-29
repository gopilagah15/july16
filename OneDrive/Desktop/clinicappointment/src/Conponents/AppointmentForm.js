// components/AppointmentForm.js
import React, { useState } from "react";

const AppointmentForm = ({ onAddAppointment }) => {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      patientName,
      doctorName,
      appointmentDate,
      billing: Math.random() * 100 + 50, // Random billing for example
    };
    onAddAppointment(newAppointment);
    setPatientName("");
    setDoctorName("");
    setAppointmentDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Appointment</h2>
      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Doctor Name"
        value={doctorName}
        onChange={(e) => setDoctorName(e.target.value)}
        required
      />
      <input
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        required
      />
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
