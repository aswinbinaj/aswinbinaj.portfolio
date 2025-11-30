import React, { useState } from "react";
import "../home/ContactForm.css";
import { sendMessageToWhatsApp } from "../../utils/whatsapp";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessageToWhatsApp(form);
  };

  return (
    <section className="contact-alt-section" id="contact">
      <div className="contact-card">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <form className="contact-alt-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="alt-submit-btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
