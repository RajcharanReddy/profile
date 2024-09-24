import React, { useState } from 'react';
import '/Users/rajcharanreddy/Desktop/personal-portfolio/src/contact.css'; // Ensure you have your CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    window.location.href = `mailto:rajcharanreddy2002@gmail.com?subject=Contact Form Submission from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage:%0A${message}`;
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <span>📞 +91 6281388344</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <span>📧 <a href="mailto:rajcharanreddy2002@gmail.com">rajcharanreddy2002@gmail.com</a></span>
        </div>
        <div className="contact-item">
          <i className="fab fa-linkedin"></i>
          <span>💼 <a href="https://www.linkedin.com/in/rajcharanreddy/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></span>
        </div>
        <div className="contact-item">
          <i className="fab fa-instagram"></i>
          <span>📸 <a href="https://www.instagram.com/reddy_rajcharan?igsh=MTA0MmtwbmJ1ZjNmcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram Profile</a></span>
        </div>
       
        
        
      </div>
      <div className="contact-form">
        <h3>Send Me a Message</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
