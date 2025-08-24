// src/components/StudySupport.jsx

import React from 'react';
import './StudySupport.css'; // Import the stylesheet for styling

const StudySupport = () => {
  return (
    <div className="study-support">
      <h2 className="title">Study Support Resources</h2>
      <p className="description">
        Empower your learning with curated resources, expert guidance, and collaborative opportunities. Whether you're preparing for exams, improving your skills, or seeking academic support, we have something for everyone.
      </p>
      <section className="resources">
        <h3 className="section-title">Available Resources</h3>
        <ul className="resource-list">
          <li>
            <strong>Study Guides:</strong> Comprehensive guides designed for various subjects.
            <a href="/resources/study-guides" className="link"> Learn More</a>
          </li>
          <li>
            <strong>Online Tutoring:</strong> Connect with certified tutors for personalized sessions.
            <a href="/resources/online-tutoring" className="link"> Learn More</a>
          </li>
          <li>
            <strong>Study Groups:</strong> Collaborate with peers for enhanced learning experiences.
            <a href="/resources/study-groups" className="link"> Learn More</a>
          </li>
          <li>
            <strong>Practice Tests:</strong> Access mock exams, quizzes, and real-world problems.
            <a href="/resources/practice-tests" className="link"> Learn More</a>
          </li>
          <li>
            <strong>Career Counseling:</strong> Get expert advice to navigate your academic and professional journey.
            <a href="/resources/career-counseling" className="link"> Learn More</a>
          </li>
          <li>
            <strong>Subject-Specific Resources:</strong> Tailored resources for CSS, IT, CS, EE, ME, BBA, Physics, CE, and more.
            <a href="/resources/subject-resources" className="link"> Learn More</a>
          </li>
          <li>
            <strong>Workshops & Webinars:</strong> Join live events to enhance your skills and knowledge.
            <a href="/resources/workshops" className="link"> Learn More</a>
          </li>
        </ul>
      </section>
      <section className="additional-support">
        <h3 className="section-title">Need Personalized Support?</h3>
        <p className="info-text">
          Not finding what you're looking for? Reach out to our support team or explore our FAQ section for detailed assistance.
        </p>
        <div className="actions">
          <a href="/contact" className="button">Contact Us</a>
          <a href="/faq" className="button secondary">FAQs</a>
        </div>
      </section>
      <footer className="footer">
        <p>
          <strong>Disclaimer:</strong> All resources provided are for educational purposes. Ensure you verify and cross-reference information for accuracy.
        </p>
      </footer>
    </div>
  );
};

export default StudySupport;
