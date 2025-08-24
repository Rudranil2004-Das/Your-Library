import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
    return (
        <section className="about-section">
            <div className="container">
                <h2>About Us</h2>
                <p>
                    Welcome to our Book Search platform, designed to offer a simple and efficient way to explore and discover books. 
                    Our mission is to create a user-friendly experience that makes finding your next read both easy and enjoyable.
                </p>
                <div className="team-grid">
                    <div className="team-member">
                        <h3>Rudranil Das</h3>
                        <p>Frontend Developer</p>
                        <p>Contact: +91 74390 88691</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
