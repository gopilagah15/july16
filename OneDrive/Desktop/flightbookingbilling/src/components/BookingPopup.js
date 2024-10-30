import React, { useState } from "react";

const BookingPopup = ({ passenger, onConfirmBooking }) => {
  const [services, setServices] = useState({ baggage: false, meals: false });

  const handleToggleService = (service) => {
    setServices((prev) => ({ ...prev, [service]: !prev[service] }));
  };

  const handleConfirm = () => {
    onConfirmBooking(services);
  };

  return (
    <div className="popup">
      <h3>Confirm Booking for {passenger.name}</h3>
      <label>
        <input
          type="checkbox"
          checked={services.baggage}
          onChange={() => handleToggleService("baggage")}
        />
        Extra Baggage ($30)
      </label>
      <label>
        <input
          type="checkbox"
          checked={services.meals}
          onChange={() => handleToggleService("meals")}
        />
        Meal Service ($15)
      </label>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default BookingPopup;
