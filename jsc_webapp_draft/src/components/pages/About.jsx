import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

// Placeholder images (replace with actual images)
import aboutHero from '../../assets/images/superhero.png';
import team1 from '../../assets/images/team1.png';
import team2 from '../../assets/images/team2.png';
import team3 from '../../assets/images/team3.png';

const About = () => {
    return (
        <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
            <div className="about-hero-content">
            <h1>Uncovering Truth Since 2015</h1>
            <p className="hero-subtitle">Professional. Discreet. Thorough.</p>
            </div>
            <div className="about-hero-image">
            <img src={aboutHero} alt="JSC Exposing team at work" />
            </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
            <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
                At JSC Exposing, we believe in delivering <strong>undeniable truth</strong> through meticulous investigation. 
                Founded in 2015, we've dedicated ourselves to providing clients with <strong>clear, actionable intelligence</strong> 
                to make informed decisions in both personal and professional matters.
            </p>
            <div className="mission-stats">
                <div className="stat-item">
                <span className="stat-number">300+</span>
                <span className="stat-label">Cases Solved</span>
                </div>
                <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
                </div>
                <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Availability</span>
                </div>
            </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
            <h2>Our Expert Team</h2>
            <p className="section-intro">
            Meet the professionals dedicated to uncovering your truth
            </p>
            <div className="team-grid">
            <div className="team-member">
                <img src={team1} alt="John Smith" />
                <h3>John Smith</h3>
                <p className="position">Founder & Lead Investigator</p>
                <p className="bio">
                20+ years in law enforcement. Specializes in corporate investigations and forensic accounting.
                </p>
            </div>
            <div className="team-member">
                <img src={team2} alt="Sarah Chen" />
                <h3>Sarah Chen</h3>
                <p className="position">Surveillance Specialist</p>
                <p className="bio">
                Former intelligence officer with expertise in digital surveillance and background checks.
                </p>
            </div>
            <div className="team-member">
                <img src={team3} alt="Michael Rodriguez" />
                <h3>Michael Rodriguez</h3>
                <p className="position">Field Investigator</p>
                <p className="bio">
                Military veteran with extensive experience in personal protection and asset tracing.
                </p>
            </div>
            </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
            <h2>Our Core Values</h2>
            <div className="values-grid">
            <div className="value-card">
                <div className="value-icon">✓</div>
                <h3>Discretion</h3>
                <p>All investigations are conducted with the utmost confidentiality and professionalism.</p>
            </div>
            <div className="value-card">
                <div className="value-icon">✓</div>
                <h3>Integrity</h3>
                <p>We adhere to strict ethical standards and legal compliance in all our operations.</p>
            </div>
            <div className="value-card">
                <div className="value-icon">✓</div>
                <h3>Precision</h3>
                <p>Thorough, detail-oriented approach ensures nothing is overlooked.</p>
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
            <h2>Ready to Work With Us?</h2>
            <Link to="/contact" className="cta-button">Contact Our Team</Link>
        </section>
        </div>
    );
};

export default About;