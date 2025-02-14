import React from "react";
import { db, collection, addDoc } from "../firebaseConfig";

const EventList = ({ events }) => {
  const bookEvent = async (eventId) => {
    await addDoc(collection(db, "bookings"), { eventId, user: "Guest" });
    alert("Event booked!");
  };

  return (
    <div>
      <h2>Events</h2>
      {events.map(event => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <p>{event.date}</p>
          <p>{event.description}</p>
          <button onClick={() => bookEvent(event.id)}>Book</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
