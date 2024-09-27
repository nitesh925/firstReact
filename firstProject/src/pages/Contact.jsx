// src/components/ContactPage.jsx

import React, { useState } from 'react';
import { db } from '../firebaseConfig'; // Import your Firebase configuration
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore methods
import '../styles/Contact.css';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // State to manage loading

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true

        try {
            await addDoc(collection(db, 'contacts'), {
                name,
                email,
                message,
                timestamp: new Date() // Add timestamp for tracking
            });
            alert("Message sent successfully!");
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error sending message");
        } finally {
            setLoading(false); // Set loading to false
        }
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
            <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>If you have any questions, feel free to reach out!</p>
                <p>Email: support@example.com</p>
                <p>Phone: +123 456 7890</p>
                <p>Address: 123 Matchmaking Lane, City, Country</p>
            </div>
        </div>
    );
};

export default ContactPage;
