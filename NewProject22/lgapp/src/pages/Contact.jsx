import React, { useState } from 'react';
import { db } from '../firebaseConfig'; // Import Firebase config
import { collection, addDoc } from 'firebase/firestore';
import '../styles/Contact.css'; // Import CSS
import contactImage from '../images/flower.png'; // Import an image

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, 'contacts'), { ...formData, timestamp: new Date() });
            alert("Message sent successfully!");
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error sending message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-section">
            <div className="contact-container">
                {/* Left Side: Image */}
                <div className="contact-image">
                    <img src={contactImage} alt="Contact Us" />
                </div>

                {/* Right Side: Form */}
                <div className="contact-form-container">
                    <h2>Contact Us</h2>
                    <p>We’d love to hear from you! Fill out the form below and we’ll get back to you soon.</p>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                        <button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>
                    </form>
                    <div className="contact-info">
                        <p><strong>Email:</strong> support@example.com</p>
                        <p><strong>Phone:</strong> +123 456 7890</p>
                        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
