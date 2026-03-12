/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, BookOpen, Lightbulb, ShieldCheck } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Intersection Observer for scroll animations (Vanilla JS technique applied in React)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Premium Logo Icon Component
  const LogoIcon = ({ className = "", style = {} }) => (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10L85 30V35L50 55L15 35V30L50 10Z" fill="#FF5A00" />
      <path d="M15 35L50 55V90L15 70V35Z" fill="#1A1A1A" />
      <path d="M50 55L85 35V70L50 90V55Z" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round" />
      <path d="M50 55V90" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round" />
      <path d="M15 35L50 55" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round" />
      <path d="M85 35L50 55" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );

  return (
    <>
      <header>
        <div className="container nav-container">
          <a href="#home" className="logo">
            <LogoIcon />
            <span>IDR</span>
          </a>
          
          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#model" onClick={() => setIsMenuOpen(false)}>Model</a>
            <a href="#community" onClick={() => setIsMenuOpen(false)}>Community</a>
            <a href="#contact" className="btn-nav" onClick={() => setIsMenuOpen(false)}>Register Interest</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-content reveal">
              <h1>Advancing the Future of Digital Risk</h1>
              <p>
                We train and deploy elite digital risk practitioners. Bridging the gap between 
                academic rigor and industry practice to secure high-consequence environments.
              </p>
              <div className="btn-group">
                <a href="#model" className="btn btn-primary">Explore Programs</a>
                <a href="#contact" className="btn btn-outline">Hire Talent</a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <div className="container">
            <div className="about-grid">
              <div className="about-content reveal">
                <h2 className="section-title">Who We Are</h2>
                <p>
                  The Institute of Digital Risk (IDR) is an industry-led training and deployment institute 
                  dedicated to cultivating the next generation of digital, cyber, and technology risk professionals.
                </p>
                <div className="about-highlight">
                  Bridging academic insight with real-world industry projects.
                </div>
                <p>
                  Partnered with leading UK universities, we ensure our practitioners are equipped with both 
                  theoretical frameworks and the practical, hands-on experience needed to tackle modern digital 
                  threats in regulated sectors.
                </p>
              </div>
              <div className="about-visual reveal delay-1">
                <LogoIcon />
              </div>
            </div>
          </div>
        </section>

        {/* Services / Model Section */}
        <section className="services" id="model">
          <div className="container">
            <div className="services-header reveal">
              <h2 className="section-title">Our Core Model</h2>
              <p>A comprehensive ecosystem designed to build, innovate, and deploy risk capabilities.</p>
            </div>
            
            <div className="services-grid">
              <div className="card reveal delay-1">
                <BookOpen className="card-icon" />
                <h3>Academy</h3>
                <p>
                  Intensive training and bootcamps for students and professionals. We build foundational 
                  and advanced skills in cyber, AI governance, and digital risk management.
                </p>
              </div>
              <div className="card reveal delay-2">
                <Lightbulb className="card-icon" />
                <h3>Innovation & Incubation</h3>
                <p>
                  Developing intellectual property and future risk models. We stay ahead of emerging 
                  threats through continuous research and AI governance frameworks.
                </p>
              </div>
              <div className="card reveal delay-3">
                <ShieldCheck className="card-icon" />
                <h3>Advisory Services</h3>
                <p>
                  Helping organizations implement robust frameworks like NIST, ISO 27001, and NIS2. 
                  We deploy our trained practitioners to solve real-world compliance challenges.
                </p>
              </div>
            </div>

            <div className="pipeline reveal">
              <h3>The IDR Pipeline</h3>
              <div className="pipeline-track">
                <div className="pipeline-step">
                  <div className="step-number">01</div>
                  <h4>Train</h4>
                  <p>Rigorous academic & practical curriculum</p>
                </div>
                <div className="pipeline-step">
                  <div className="step-number">02</div>
                  <h4>Hire</h4>
                  <p>Select top talent for specialized roles</p>
                </div>
                <div className="pipeline-step">
                  <div className="step-number">03</div>
                  <h4>Innovate</h4>
                  <p>Develop proprietary risk models & IP</p>
                </div>
                <div className="pipeline-step">
                  <div className="step-number">04</div>
                  <h4>Deploy</h4>
                  <p>Integrate practitioners into industry</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="community" id="community">
          <div className="container reveal">
            <h2 className="section-title">Built for the Community</h2>
            <p>
              Serving students, early-career professionals, and established practitioners seeking to upskill. 
              We specifically target sectors like financial services and critical national infrastructure, 
              where the demand for rigorous risk governance and AI safety is highest.
            </p>
            <a href="#contact" className="btn btn-outline">Join the Network</a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info reveal">
                <h2 className="section-title">Partner With Us</h2>
                <p>
                  Whether you are looking to upskill your career, hire elite risk practitioners, 
                  or collaborate on future risk models, we want to hear from you.
                </p>
                <p style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                  hello@instituteofdigitalrisk.com
                </p>
              </div>
              
              <form className="contact-form reveal delay-1" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" id="name" className="form-input" placeholder=" " required />
                  <label htmlFor="name" className="form-label">Full Name</label>
                </div>
                <div className="form-group">
                  <input type="email" id="email" className="form-input" placeholder=" " required />
                  <label htmlFor="email" className="form-label">Email Address</label>
                </div>
                <div className="form-group">
                  <textarea id="message" className="form-input" placeholder=" " required></textarea>
                  <label htmlFor="message" className="form-label">How can we help?</label>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Inquiry</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="logo">
              <LogoIcon style={{ width: '24px', height: '24px' }} />
              <span>Institute of Digital Risk</span>
            </div>
            <div className="nav-links" style={{ gap: '1.5rem' }}>
              <a href="#about" style={{ fontSize: '0.8rem' }}>About</a>
              <a href="#model" style={{ fontSize: '0.8rem' }}>Model</a>
              <a href="#contact" style={{ fontSize: '0.8rem' }}>Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Institute of Digital Risk. All rights reserved. Designed for excellence.
          </div>
        </div>
      </footer>
    </>
  );
}
