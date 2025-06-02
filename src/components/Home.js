import React from 'react';
import { motion } from 'framer-motion';
import ParticlesComponent from './particles';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import java from '../assets/java.png';
import cpp from '../assets/c++.png';
import opengl from '../assets/opengl.png';
import python from '../assets/python.png';
import git from '../assets/images.png';
import react from '../assets/react.png';
import sql from '../assets/sql.png';
import c from '../assets/c.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import emailjs from 'emailjs-com';
import graduation from '../assets/graduation.png';

const skills = [
  { name: 'Java', image: java },
  { name: 'C++', image: cpp },
  { name: 'OpenGL', image: opengl },
  { name: 'Python', image: python },
  { name: 'Git', image: git },
  { name: 'React', image: react },
  { name: 'C', image: c },
  { name: 'SQL', image: sql },
  { name: 'CSS', image: css },
  { name: 'HTML', image: html },
  { name: 'JavaScript', image: javascript },
];

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_401g7r9',
      'template_e8icblv',
      e.target,
      'Agf1414uJ3NFsVvBs'
    )
    .then(
      () => {
        alert('Message sent successfully!');
      },
      () => {
        alert('Failed to send message. Please try again.');
      }
    );

  e.target.reset();
};

function Home() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#0d1117',
        color: '#ffffff',
        overflow: 'hidden',
        padding: '2rem',
      }}
    >
      <ParticlesComponent id="tsparticles" />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '3rem',
              color: 'var(--accent-color)',
              marginBottom: '1rem',
            }}
          >
            Santiago Kipp
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.5,
              marginBottom: '2rem',
            }}
          >
            Software Developer & Problem Solver. Passionate about building impactful, real life solutions.
            This website was built by me using React and JavaScript.
          </p>

          {/* Graduation Image */}
          <motion.img
            src={graduation}
            alt="Santiago Kipp at Graduation"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              width: '320px',
              borderRadius: '15px',
              boxShadow: '0 0 15px var(--accent-color)',
              border: '2px solid var(--accent-color)',
              display: 'block',
              margin: '2rem auto',
            }}
          />

          {/* About Me Button */}
          <Link
            to="/about"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'transparent',
              color: 'var(--accent-color)',
              border: '2px solid var(--accent-color)',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-color)';
              e.currentTarget.style.color = '#0d1117';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--accent-color)';
            }}
          >
            Learn More About Me
          </Link>

          {/* Download Resume Button */}
          <div style={{ textAlign: 'center' }}>
            <a
              href="/SantiagoKippResumeUpdated.pdf"
              download="Santiago-Kipp-Resume.pdf"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'transparent',
                color: 'var(--accent-color)',
                border: '2px solid var(--accent-color)',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'background-color 0.3s, color 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                e.currentTarget.style.color = '#0d1117';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--accent-color)';
              }}
            >
              Download My Resume
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          style={{ marginTop: '3rem' }}
        >
          <h2
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: 'var(--accent-color)',
              fontSize: '2rem',
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            My Skills
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                style={{
                  background: '#161b22',
                  borderRadius: '8px',
                  padding: '1rem',
                  width: '100px',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 10px var(--accent-color)',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'contain',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* My Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ marginTop: '3rem', textAlign: 'center' }}
        >
          <h2
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: 'var(--accent-color)',
              fontSize: '2rem',
              marginBottom: '0.5rem',
            }}
          >
            My Projects
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              color: '#cccccc',
            }}
          >
            Coming Soon...
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{
            marginTop: '3rem',
            padding: '1rem',
            background: '#161b22',
            borderRadius: '8px',
            boxShadow: '0 0 10px var(--accent-color)',
          }}
        >
          <h2
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: 'var(--accent-color)',
              fontSize: '2rem',
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            Contact Me
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={{
                padding: '0.75rem',
                border: '2px solid var(--accent-color)',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                color: '#ffffff',
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={{
                padding: '0.75rem',
                border: '2px solid var(--accent-color)',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                color: '#ffffff',
              }}
            />
            <input
              type="text"
              name="title"
              placeholder="Subject"
              required
              style={{
                padding: '0.75rem',
                border: '2px solid var(--accent-color)',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                color: '#ffffff',
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              style={{
                padding: '0.75rem',
                border: '2px solid var(--accent-color)',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                color: '#ffffff',
                resize: 'vertical',
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: '0.75rem',
                backgroundColor: 'var(--accent-color)',
                color: '#0d1117',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4fa3d1')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-color)')}
            >
              Send
            </button>
          </form>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          style={{
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <a
            href="https://github.com/santiagokipp"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#58a6ff', fontSize: '1.5rem' }}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/santiago-kipp"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#58a6ff', fontSize: '1.5rem' }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/agokipp"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#58a6ff', fontSize: '1.5rem' }}
          >
            <FaTwitter />
          </a>
        </motion.div>
        <div
  style={{
    textAlign: 'center',
    marginTop: '2rem',
    fontSize: '0.85rem',
    color: '#999', // subtle text color
  }}
>
  This website was built by me using React and JavaScript.
</div>

      </div>
    </section>
  );
}

export default Home;
