import React from "react";

const BookingList = ({ bookings }) => {
  return (
    <div>
      <h2>Bookings</h2>
      {bookings.map(booking => (
        <div key={booking.id}>
          <p>Event ID: {booking.eventId}</p>
          <p>User: {booking.user}</p>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
