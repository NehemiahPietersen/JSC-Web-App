import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Placeholder images (replace with your actual images)
import heroImage from '../../assets/images/hero.png';
import service1 from '../../assets/images/service1.png';
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.png';

const Home = () => {
    return (
        <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
            <div className="hero-content">
            <h1>Exposing Truth With Precision</h1>
            <p className="hero-subtitle">Professional investigative services since 2015</p>
            <div className="hero-cta">
                <Link to="/contact" className="cta-button primary">Get a Consultation</Link>
                <Link to="/about" className="cta-button secondary">Learn More</Link>
            </div>
            </div>
            <div className="hero-image">
            <img src={heroImage} alt="Professional investigative work" />
            </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
            <h2>Our Specialized Services</h2>
            <div className="services-grid">
            <div className="service-card">
                <img src={service1} alt="Background Checks" />
                <h3>Comprehensive Background Checks</h3>
                <p>Thorough vetting for employment, tenancy, or personal relationships with detailed reporting.</p>
            </div>
            <div className="service-card">
                <img src={service2} alt="Surveillance" />
                <h3>Discreet Surveillance</h3>
                <p>Professional monitoring services with state-of-the-art equipment and legally admissible evidence.</p>
            </div>
            <div className="service-card">
                <img src={service3} alt="Fraud Investigation" />
                <h3>Fraud Investigation</h3>
                <p>Financial and insurance fraud examination with court-ready documentation.</p>
            </div>
            </div>
        </section>

        {/* Testimonial Section */}
        <section className="testimonial-section">
            <h2>Trusted By Professionals</h2>
            <div className="testimonial">
            <blockquote>
                "JSC Exposing provided critical evidence that helped resolve our corporate espionage case. Their attention to detail was exceptional."
            </blockquote>
            <p className="client-name">— Sarah Johnson, Legal Counsel at Fortis Law Group</p>
            </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
            <h2>Ready to Discover the Truth?</h2>
            <p>Contact us for a confidential consultation today.</p>
            <Link to="/contact" className="cta-button primary">Contact Our Team</Link>
        </section>
        </div>
    );
};

export default Home;