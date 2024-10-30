import React, { useState } from "react";

const PassengerForm = ({ onAddPassenger }) => {
  const [formState, setFormState] = useState({
    name: "",
    flight: "",
    seat: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPassenger({ ...formState, id: Date.now(), services: {} });
    setFormState({ name: "", flight: "", seat: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Register Passenger</h3>
      <input name="name" placeholder="Name" value={formState.name} onChange={handleChange} required />
      <input name="flight" placeholder="Flight" value={formState.flight} onChange={handleChange} required />
      <input name="seat" placeholder="Seat" value={formState.seat} onChange={handleChange} required />
      <button type="submit">Add Passenger</button>
    </form>
  );
};

export default PassengerForm;
