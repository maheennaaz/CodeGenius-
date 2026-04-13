import React, { useState } from "react";
import styled from "styled-components";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully! 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <DIV>
      {/* Header */}
      <div className="hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you</p>
      </div>

      {/* Main Section */}
      <div className="container">

        {/* Left Info Panel */}
        <div className="info">
          <h2>📞 Get in Touch</h2>
          <p>
            Have questions about CodeGenius?  
            Want to give feedback or suggestions?  
            Reach out to us!
          </p>

          <div className="details">
            <p><b>Email:</b> codegenius.support@gmail.com</p>
            <p><b>Phone:</b> +91 9234567891</p>
            <p><b>Location:</b> Kalaburagi, India</p>
          </div>
        </div>

        {/* Right Contact Form */}
        <form className="form" onSubmit={handleSubmit}>
          <h2>✉️ Send a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>

      </div>
    </DIV>
  );
};

const DIV = styled.div`
  min-height: 90vh;
  background: linear-gradient(to right, #e8fff4, #ffffff);

  .hero {
    background-color: #5cdb94;
    padding: 40px;
    text-align: center;
    color: #05396b;
  }

  .hero h1 {
    font-size: 40px;
    margin-bottom: 5px;
  }

  .hero p {
    font-size: 18px;
  }

  .container {
    width: 85%;
    margin: 40px auto;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
  }

  .info {
    flex: 1;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: rgba(0,0,0,0.1) 0px 4px 12px;
    transition: 0.3s;
  }

  .info:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0,0,0,0.2) 0px 8px 18px;
    background-color: #f0fff8;
  }

  .details {
    margin-top: 20px;
    line-height: 1.8;
  }

  .form {
    flex: 1;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: rgba(0,0,0,0.1) 0px 4px 12px;
    transition: 0.3s;
  }

  .form:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0,0,0,0.2) 0px 8px 18px;
    background-color: #f0fff8;
  }

  .form h2 {
    color: #05396b;
    margin-bottom: 15px;
  }

  input, textarea {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid lightgray;
    font-size: 15px;
  }

  textarea {
    height: 100px;
    resize: none;
  }

  button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #05396b;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: #5cdb94;
    color: black;
  }
`;

