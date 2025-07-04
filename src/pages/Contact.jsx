import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'pokharel.abiral123@email.com',
      link: 'mailto:pokharel.abiral123@email.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+977 9745337467',
      link: 'tel:+9779745337467'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'Biratnagari, Nepal',
      link: 'https://maps.google.com/maps?q=Biratnagar,Nepal'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Response Time',
      content: 'Within 24 hours',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/gemuser',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/abiral-pokharel-054774310/',
      color: '#0077b5'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://instagram.com/abiral_p1',
      color: '#e4405f'
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      url: 'mailto:pokharel.abiral123@email.com',
      color: '#ea4335'
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        <section className="contact-hero section">
          <h1 className="section-title scroll-reveal">Get In Touch</h1>
          <p className="contact-intro scroll-reveal">
            I'm always excited to connect with fellow developers, potential collaborators, 
            or anyone interested in technology. Feel free to reach out!
          </p>
        </section>

        <section className="contact-content section">
          <div className="contact-grid">
            <div className="contact-form-section scroll-reveal-left">
              <h2>Send me a message</h2>
              <form onSubmit={handleSubmit} className="contact-form hover-glow">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn hover-lift" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="submitting">Sending...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="contact-info-section scroll-reveal-right">
              <h2>Contact Information</h2>
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className={`contact-info-item scroll-reveal-scale stagger-${index + 1} hover-lift`}>
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h3>{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer">
                          {info.content}
                        </a>
                      ) : (
                        <p>{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-section scroll-reveal">
                <h3>Connect with me</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link hover-lift"
                      style={{ '--hover-color': social.color }}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="availability section">
          <div className="availability-card scroll-reveal hover-glow">
            <h2>Current Availability</h2>
            <div className="availability-content">
              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span className="status-text">Available for new opportunities</span>
              </div>
              <p className="availability-description">
                I'm currently open to internships, part-time projects, and collaborative 
                opportunities. As a student, I'm particularly interested in gaining 
                real-world experience and contributing to meaningful projects.
              </p>
              <div className="availability-details">
                <div className="detail-item scroll-reveal-scale stagger-1">
                  <h4>Internships</h4>
                  <p>Looking for summer internships in software development</p>
                </div>
                <div className="detail-item scroll-reveal-scale stagger-2">
                  <h4>Projects</h4>
                  <p>Open to collaborative projects and freelance work</p>
                </div>
                <div className="detail-item scroll-reveal-scale stagger-3">
                  <h4>Learning</h4>
                  <p>Always eager to learn new technologies and methodologies</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;