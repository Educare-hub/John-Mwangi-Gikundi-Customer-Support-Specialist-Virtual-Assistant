import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    
    try {
      const response = await fetch('https://formspree.io/f/FORMSPREE_ID', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('✅ Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('❌ Something went wrong. Please email me directly at mwasjoh5478@gmail.com');
      }
    } catch (error) {
      setFormStatus('❌ Please email me directly at mwasjoh5478@gmail.com');
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">John Mwangi</div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('tools')} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link nav-cta">Contact Me</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Available for Remote Work</div>
          <h1 className="hero-title">
            John Mwangi Gikundi
          </h1>
          <p className="hero-subtitle">
            Customer Support Specialist & Virtual Assistant
          </p>
          <p className="hero-description">
            7 years of experience helping customers and solving problems. I turn frustrated customers into satisfied ones with an 85% first-contact resolution rate.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">85%</div>
              <div className="stat-label">Same-Day Resolution</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Staff Trained</div>
            </div>
          </div>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              Hire Me Now
            </button>
            <button onClick={() => scrollToSection('services')} className="btn-secondary">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                I'm a dedicated customer support professional with 7 years of experience helping people and solving their problems. I've worked with companies like Chieni Supermarket and Unilever Tea Kenya, where I built my reputation for staying calm under pressure and turning challenging situations into positive outcomes.
              </p>
              <p>
                What sets me apart is my ability to communicate clearly in both English and Swahili, my quick learning ability, and my genuine commitment to making sure every customer interaction ends positively. I've trained over 20 staff members on customer service best practices and maintained a consistent 85% first-contact resolution rate.
              </p>
              <p>
                I hold a Bachelor of Science in Mechanical Engineering from Dedan Kimathi University, which taught me systematic problem-solving and logical thinking. I recently completed Quality Assurance training through Teach2Give Foundation, adding quality control expertise to my skillset.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">🎯</div>
                <h3>My Approach</h3>
                <p>I listen carefully, stay patient, and find solutions that work. I believe every customer deserves clear answers and genuine care.</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">⚡</div>
                <h3>Quick Learner</h3>
                <p>I adapt fast to new tools and systems. Give me a new platform, and I'll master it quickly to serve your customers better.</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🤝</div>
                <h3>Team Player</h3>
                <p>I work seamlessly with colleagues, share knowledge freely, and help new team members succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Services I Provide</h2>
          <p className="section-subtitle">Comprehensive support solutions to help your business run smoothly</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📧</div>
              <h3>Email Management</h3>
              <p>I handle your inbox efficiently, respond to customer emails professionally, organize messages, and ensure nothing important gets missed. Quick turnaround on all correspondence.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📅</div>
              <h3>Scheduling & Calendar Management</h3>
              <p>I manage your appointments, coordinate meetings across time zones, send reminders, and keep your calendar organized so you can focus on what matters.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📞</div>
              <h3>Customer Support</h3>
              <p>I answer customer questions, handle complaints professionally, resolve issues quickly, and turn frustrated customers into satisfied ones with my proven approach.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📝</div>
              <h3>Data Entry & Documentation</h3>
              <p>I maintain accurate records, input data efficiently, create organized spreadsheets, and ensure all customer interactions are properly documented.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💾</div>
              <h3>Administrative Support</h3>
              <p>I handle day-to-day admin tasks, prepare reports, manage files, coordinate with team members, and keep operations running smoothly.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Quality Assurance</h3>
              <p>I review processes, identify improvement areas, check for errors, and ensure quality standards are met consistently across all customer touchpoints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Skills Section */}
      <section id="tools" className="section">
        <div className="container">
          <h2 className="section-title">Tools & Skills</h2>
          <p className="section-subtitle">Software and platforms I use to deliver excellent results</p>
          <div className="tools-container">
            <div className="tool-category">
              <h3 className="tool-category-title">Microsoft Office Suite</h3>
              <div className="tool-tags">
                <span className="tool-tag">Microsoft Word</span>
                <span className="tool-tag">Microsoft Excel</span>
                <span className="tool-tag">Microsoft PowerPoint</span>
              </div>
            </div>
            <div className="tool-category">
              <h3 className="tool-category-title">Google Workspace</h3>
              <div className="tool-tags">
                <span className="tool-tag">Google Docs</span>
                <span className="tool-tag">Google Sheets</span>
                <span className="tool-tag">Gmail</span>
                <span className="tool-tag">Google Drive</span>
              </div>
            </div>
            <div className="tool-category">
              <h3 className="tool-category-title">Core Competencies</h3>
              <div className="tool-tags">
                <span className="tool-tag">Customer Service</span>
                <span className="tool-tag">Complaint Handling</span>
                <span className="tool-tag">Email Communication</span>
                <span className="tool-tag">Problem Solving</span>
                <span className="tool-tag">Team Training</span>
                <span className="tool-tag">Quality Assurance</span>
                <span className="tool-tag">Data Entry</span>
                <span className="tool-tag">Report Writing</span>
              </div>
            </div>
            <div className="tool-category">
              <h3 className="tool-category-title">Languages</h3>
              <div className="tool-tags">
                <span className="tool-tag">English (Fluent)</span>
                <span className="tool-tag">Swahili (Native)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Hire Me?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-number">01</div>
              <h3>Proven Track Record</h3>
              <p>7 years of experience with measurable results. I've maintained an 85% same-day resolution rate and zero safety incidents over 2 years at Unilever.</p>
            </div>
            <div className="why-card">
              <div className="why-number">02</div>
              <h3>Clear Communication</h3>
              <p>I explain things in simple words people understand. Fluent in English and Swahili, I connect with diverse customers and team members effectively.</p>
            </div>
            <div className="why-card">
              <div className="why-number">03</div>
              <h3>Stays Calm Under Pressure</h3>
              <p>I handle angry customers professionally and find solutions quickly. I've worked through busy periods helping multiple customers while maintaining quality.</p>
            </div>
            <div className="why-card">
              <div className="why-number">04</div>
              <h3>Training & Leadership</h3>
              <p>I've trained over 20 staff members on customer service procedures. I share knowledge and help teams succeed together.</p>
            </div>
            <div className="why-card">
              <div className="why-number">05</div>
              <h3>Reliable & Flexible</h3>
              <p>I'm always on time and can work different shifts including nights and weekends. I can work overtime when needed and I'm ready to learn new skills.</p>
            </div>
            <div className="why-card">
              <div className="why-number">06</div>
              <h3>Self-Motivated</h3>
              <p>I work well independently without constant supervision. Give me a task and trust that it will be done professionally and on time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How I Work</h2>
          <p className="section-subtitle">My simple 4-step process for delivering excellent results</p>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">1</div>
              <h3>Listen & Understand</h3>
              <p>I take time to understand your needs, your customers, and your goals. I ask questions to make sure I get it right from the start.</p>
            </div>
            <div className="process-step">
              <div className="process-number">2</div>
              <h3>Learn Your Systems</h3>
              <p>I quickly adapt to your tools and processes. I study your procedures and ask for clarification when needed to maintain consistency.</p>
            </div>
            <div className="process-step">
              <div className="process-number">3</div>
              <h3>Deliver Quality Work</h3>
              <p>I handle tasks professionally, maintain high standards, and keep you updated. I solve problems before they become bigger issues.</p>
            </div>
            <div className="process-step">
              <div className="process-number">4</div>
              <h3>Continuous Improvement</h3>
              <p>I share feedback, suggest improvements, and look for ways to make processes better. I'm always learning and growing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Availability</h2>
          <div className="availability-content">
            <div className="availability-card">
              <div className="availability-icon">🌍</div>
              <h3>Location</h3>
              <p>Nyeri, Kenya</p>
              <p className="availability-note">Available for remote work worldwide</p>
            </div>
            <div className="availability-card">
              <div className="availability-icon">⏰</div>
              <h3>Working Hours</h3>
              <p>Flexible schedule</p>
              <p className="availability-note">Can work different shifts including nights, weekends, and overtime when needed</p>
            </div>
            <div className="availability-card">
              <div className="availability-icon">🚀</div>
              <h3>Start Date</h3>
              <p>Immediate availability</p>
              <p className="availability-note">Ready to start and make an impact right away</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Let's discuss how I can help your business succeed</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h3>Email</h3>
                <a href="mailto:mwasjoh5478@gmail.com">mwasjoh5478@gmail.com</a>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📱</div>
                <h3>Phone</h3>
                <a href="tel:+254757179712">+254 757 179 712</a>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3>Location</h3>
                <p>Nyeri, Kenya</p>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or what kind of support you need..."
                ></textarea>
              </div>
              {formStatus && <div className="form-status">{formStatus}</div>}
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h4>John Mwangi Gikundi</h4>
              <p>Customer Support Specialist & Virtual Assistant</p>
              <p className="footer-tagline">Making customer experiences exceptional, one interaction at a time.</p>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>Customer Support</li>
                <li>Email Management</li>
                <li>Administrative Support</li>
                <li>Data Entry</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>📧 mwasjoh5478@gmail.com</li>
                <li>📱 +254 757 179 712</li>
                <li>📍 Nyeri, Kenya</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2019 John Mwangi Gikundi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
