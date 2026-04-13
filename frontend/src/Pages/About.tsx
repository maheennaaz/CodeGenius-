import React from "react";
import styled from "styled-components";
import Logo from "../assets/pngwing3.png";

export const About = () => {
  return (
    <DIV>
      {/* Header Section */}
      <div className="hero">
        <img src={Logo} alt="CodeGenius Logo" />
        <h1>CodeGenius</h1>
        <p>AI-Powered Interview Preparation Platform</p>
      </div>

      {/* Main Content */}
      <div className="content">

        <div className="card">
          <h2>🎯 Our Mission</h2>
          <p>
            CodeGenius is designed to help students and job seekers prepare for
            technical interviews through an interactive AI-driven experience.
            It simulates real interview environments and provides instant
            intelligent feedback to improve performance.
          </p>
        </div>

        <div className="card">
          <h2>⚙️ How It Works</h2>
          <ul>
            <li>Select your interview domain (MERN, Node.js, Java).</li>
            <li>Answer questions using voice or text.</li>
            <li>AI analyzes your response.</li>
            <li>Instant feedback is generated.</li>
          </ul>
        </div>

        <div className="card">
          <h2>💡 Key Features</h2>
          <ul>
            <li>Real-time interview simulation</li>
            <li>Speech-to-text answer recording</li>
            <li>Webcam-enabled interview practice</li>
            <li>AI-powered feedback system</li>
            <li>MongoDB question database</li>
          </ul>
        </div>

        <div className="card">
          <h2>🛠️ Tech Stack</h2>
          <p>
            <b>Frontend:</b> React + TypeScript + Styled Components <br />
            <b>Backend:</b> Node.js + Express + MongoDB <br />
            <b>AI Engine:</b> Java Spring Boot (OpenAI / LLM API)
          </p>
        </div>

        <div className="card">
          <h2>👩‍💻 Project Purpose</h2>
          <p>
            This project is developed as a full-stack academic project for
            demonstrating modern web technologies and AI integration in
            interview preparation systems.
          </p>
        </div>

      </div>
    </DIV>
  );
};

const DIV = styled.div`
  background: linear-gradient(to right, #e8fff4, #ffffff);
  min-height: 90vh;
  padding-bottom: 40px;

  .hero {
    background-color: #5cdb94;
    padding: 40px;
    text-align: center;
    color: #05396b;
  }

  .hero img {
    width: 70px;
    margin-bottom: 10px;
  }

  .hero h1 {
    font-size: 42px;
    margin: 5px 0;
  }

  .hero p {
    font-size: 18px;
    font-weight: 500;
  }

  .content {
    width: 85%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
    margin-top: 40px;
  }

  .card {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: rgba(0,0,0,0.1) 0px 4px 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: rgba(0,0,0,0.2) 0px 8px 20px;
    background-color: #f0fff8;
  }

  h2 {
    color: #05396b;
    margin-bottom: 10px;
  }

  p, li {
    font-size: 16px;
    line-height: 1.6;
  }

  ul {
    padding-left: 18px;
  }
`;
