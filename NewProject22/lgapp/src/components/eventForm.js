import React, { useState } from "react";
import { db, collection, addDoc } from "../firebaseConfig";

const EventForm = () => {
  const [event, setEvent] = useState({ name: "", date: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "events"), event);
    alert("Event added!");
    setEvent({ name: "", date: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Event Name" value={event.name} onChange={(e) => setEvent({ ...event, name: e.target.value })} required />
      <input type="date" value={event.date} onChange={(e) => setEvent({ ...event, date: e.target.value })} required />
      <textarea placeholder="Description" value={event.description} onChange={(e) => setEvent({ ...event, description: e.target.value })} required />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
