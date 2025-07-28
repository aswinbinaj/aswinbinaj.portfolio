import React from "react";
import "../home/ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-alt-section" id="contact">
      <div className="contact-card">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">Feel free to reach out for collaborations or just a friendly hello 👋</p>
        <form className="contact-alt-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address"  />
          <input type="tel" placeholder="Phone Number" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="alt-submit-btn">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
