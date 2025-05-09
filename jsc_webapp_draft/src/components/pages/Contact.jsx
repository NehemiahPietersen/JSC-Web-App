import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation would go here
        console.log('Form submitted:', formData);
        setSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
        setSubmitted(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });
        }, 3000);
    };

    return (
        <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
            <div className="hero-content">
            <h1>Get in Touch</h1>
            <p>Our team is ready to assist with your investigative needs</p>
            </div>
        </section>

        {/* Main Content */}
        <div className="contact-container">
            {/* Contact Form */}
            <section className="contact-form-section">
            <h2>Send Us a Message</h2>
            {submitted ? (
                <div className="success-message">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <h3>Thank you for your message!</h3>
                <p>We'll respond within 24 business hours.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Full Name*</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    >
                    <option value="">Select a service</option>
                    <option value="background-checks">Background Checks</option>
                    <option value="surveillance">Surveillance</option>
                    <option value="fraud-investigation">Fraud Investigation</option>
                    <option value="asset-search">Asset Search</option>
                    <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message*</label>
                    <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                    Send Message
                </button>
                </form>
            )}
            </section>

            {/* Contact Info */}
            <section className="contact-info-section">
            <div className="contact-info-card">
                <h3>Contact Information</h3>
                
                <div className="info-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                    <h4>Office Location</h4>
                    <p>123 Investigation Blvd<br />Penhill Estates, WC, South Afirca</p>
                </div>
                </div>

                <div className="info-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div>
                    <h4>Email Us</h4>
                    <p>info@jscexposing.com<br />support@jscexposing.com</p>
                </div>
                </div>

                <div className="info-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <div>
                    <h4>Call Us</h4>
                    <p>(021) 123 4567<br />Mon-Fri: 8am-4pm EST</p>
                </div>
                </div>

                <div className="emergency-notice">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm1.65-2.65L11.5 12.2V9h1v2.79l1.85 1.85-.7.71z"/>
                </svg>
                <p>For urgent matters, call our 24/7 emergency line: <strong>+1 (555) 987-6543</strong></p>
                </div>
            </div>
            </section>
        </div>
        </div>
    );
};

export default Contact;