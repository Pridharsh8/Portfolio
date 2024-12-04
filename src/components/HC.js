import React, { useState } from 'react';
import './hc.css';
import Mypic from '../pic/Mypic.jpeg';

const HC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    senderEmail: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const mailtoLink = `mailto:pridharsh2693@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.senderEmail}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setShowPopup(false); // Close the popup after sending
  };

  return (
    <div className='hom'>
      <div className='home'>
        <h2>Priyadharshini</h2>
        <h3>MERN Stack Developer</h3>
        <p>
          I am Priyadharshini, a skilled MERN stack developer with a strong foundation in creating dynamic, responsive, and user-friendly web applications. I am also an aspiring UI/UX designer dedicated to crafting intuitive and visually appealing user experiences.
          Passionate about technology and design, I strive to bridge functionality with aesthetics to create impactful digital products.
        </p>
        <button onClick={() => setShowPopup(true)}>Contact Me</button>
      </div>

      <img src={Mypic} alt="Priyadharshini" />

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Contact Me</h3>
            <input
              type="email"
              name="senderEmail"
              placeholder="Your Email"
              value={formData.senderEmail}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            />
            <div className="popup-actions">
              <button onClick={handleSubmit}>Send</button>
              <button onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HC;
