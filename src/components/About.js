import React from 'react';
import graduation from '../assets/graduation.png';
import grad from '../assets/aboutme.JPG'
import { FaBasketballBall, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { PiFootballFill } from "react-icons/pi";
import { IoBaseballOutline } from "react-icons/io5";
import { GiRaceCar, GiSoccerKick, GiTiedScroll } from "react-icons/gi";
import { RiXboxLine } from "react-icons/ri";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // for back to home link!
import ParticlesComponent from './particles';

function About() {
  return (
    <section
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '2rem',
        backgroundColor: '#0d1117',
        color: 'var(--text-color)',
        overflow: 'hidden',
      }}
    >
      <ParticlesComponent id="tsparticles" />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: '900px',
          width: '100%',
          textAlign: 'center',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'Orbitron, sans-serif',
            color: 'var(--accent-color)',
            fontSize: '3rem',
            marginBottom: '1rem',
          }}
        >
          About Me:
        </motion.h2>

        <motion.img
          src={grad}
          alt="Santiago Kipp before Graduation"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            width: '300px', // bigger image
            borderRadius: '15px',
            boxShadow: '0 0 15px var(--accent-color)',
            border: '2px solid var(--accent-color)',
            marginBottom: '1rem',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}
        >
          <h3
            style={{
              color: 'var(--accent-color)',
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              marginBottom: '1rem',
            }}
          >
            <Typewriter
              words={[
                'Software Developer',
                'Problem Solver',
                'Sports Enthusiast',
                'Tech Lover',
                'Santiago Kipp',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>

          <p>Hi, I am Santiago Kipp and I have a passion for software engineering and web development!</p>
          <p>
            It all started with a simple meeting with my Freshman year counselor. I placed highly on
            a math assessment, and told her about my passion for technology. She recommended an
            Introduction to Computer Science class, and I immediately fell in love with coding and
            software development. The rest is history.
          </p>
          <p>
            I recently graduated from Illinois State University with a Bachelor of Science degree in
            Computer Science, and am open to any opportunities in software or web development.
          </p>
          <p>
            I currently am trying to improve my development skills, and working on individual
            projects to expand my knowledge and create something meaningful. I would love to create a project for a customer,
            and help them achieve their goals through software development.
          </p>

          <p>
            In my free time, I enjoy watching/attending professional sports, mainly the NBA{' '}
            <FaBasketballBall style={{ color: 'orange' }} size={15} />, MLB{' '}
            <IoBaseballOutline style={{ color: 'blue' }} size={15} />, NFL{' '}
            <PiFootballFill style={{ color: 'brown' }} size={15} />, Formula One{' '}
            <GiRaceCar style={{ color: 'red' }} size={20} />, and various soccer leagues{' '}
            <GiSoccerKick style={{ color: 'green' }} size={20} />. I also enjoy playing recreational
            basketball and soccer.
          </p>

          <p>
            Another hobby I have is playing competitive video games{' '}
            <RiXboxLine style={{ color: 'green' }} size={15} />, with the three video games I am
            currently playing being MLB the Show 25, Black Ops 6, and The Elder Scrolls IV{' '}
            <GiTiedScroll size={20} />: Oblivion.
          </p>

          <p style={{ marginTop: '1rem' }}>
            Feel free to contact me on{' '}
            <a
              href="https://linkedin.com/in/santiago-kipp"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#58a6ff',
                textDecoration: 'none',
                fontWeight: 'bold',
                marginLeft: '5px',
              }}
            >
              LinkedIn <FaLinkedin style={{ verticalAlign: 'middle' }} />
            </a>
            , or through my email!
          </p>
        </motion.div>

        {/* Back to Home Button */}
        <div style={{ marginTop: '2rem' }}>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--accent-color)',
              color: '#0d1117',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4fa3d1')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-color)')}
          >
            Back to Home Page
          </Link>
        </div>

        {/* Social Links */}
        <div
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
        </div>
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

      </motion.div>
    </section>
  );
}

export default About;
