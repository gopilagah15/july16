import React, { useState } from "react";
import PassengerForm from "./components/PassengerForm";
import BookingPopup from "./components/BookingPopup";
import Receipt from "./components/Receipt";
import Report from "./components/Report";

const App = () => {
  const [passengers, setPassengers] = useState([]);
  const [selectedPassenger, setSelectedPassenger] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const handleAddPassenger = (passenger) => {
    setPassengers([...passengers, passenger]);
    setSelectedPassenger(passenger);
    setShowPopup(true);
  };

  const handleConfirmBooking = (additionalServices) => {
    const updatedPassenger = {
      ...selectedPassenger,
      services: additionalServices,
    };
    setPassengers((prev) =>
      prev.map((p) => (p.id === updatedPassenger.id ? updatedPassenger : p))
    );
    setShowPopup(false);
    setShowReceipt(true);
  };

  return (
    <div>
      <h2>Flight Booking & Billing System</h2>
      <PassengerForm onAddPassenger={handleAddPassenger} />
      <h3>Passenger List</h3>
      <ul>
        {passengers.map((passenger) => (
          <li key={passenger.id}>{passenger.name} - {passenger.flight}</li>
        ))}
      </ul>
      {showPopup && selectedPassenger && (
        <BookingPopup
          passenger={selectedPassenger}
          onConfirmBooking={handleConfirmBooking}
        />
      )}
      {showReceipt && selectedPassenger && <Receipt passenger={selectedPassenger} />}
      <Report passengers={passengers} />
    </div>
  );
};

export default App;
