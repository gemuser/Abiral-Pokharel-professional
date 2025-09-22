import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Github, Linkedin, Mail, Download, Code, Database, Globe } from 'lucide-react';
import { getCurrentAge } from '../utils/ageCalculator';
import './Home.css';
import Abiral from '../assets/Abiral.jpg'; // Assuming you have an image of Abiral
import Abiral1 from '../assets/Abiral1.jpg'; // Assuming you have another image for the about section
const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [currentAge, setCurrentAge] = useState(getCurrentAge());

  const words = ['Student', 'Developer', 'Programmer', 'Tech Enthusiast'];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setTypingSpeed(75);
      } else {
        setTypingSpeed(150);
      }

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  // Update age daily (check for birthday)
  useEffect(() => {
    const updateAge = () => {
      setCurrentAge(getCurrentAge());
    };

    // Update age immediately
    updateAge();

    // Check for age update every day at midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const msUntilMidnight = tomorrow.getTime() - now.getTime();
    
    const timeoutId = setTimeout(() => {
      updateAge();
      // Set up daily interval after first midnight
      const intervalId = setInterval(updateAge, 24 * 60 * 60 * 1000);
      return () => clearInterval(intervalId);
    }, msUntilMidnight);

    return () => clearTimeout(timeoutId);
  }, []);

  // Parallax effect for floating elements
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.3;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToNext = () => {
    const nextSection = document.querySelector('.about-preview');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background"></div>
        
        {/* Floating geometric shapes */}
        <div className="floating-elements">
          <div className="geometric-shape shape-1 parallax-element"></div>
          <div className="geometric-shape shape-2 parallax-element"></div>
          <div className="geometric-shape shape-3 parallax-element"></div>
          <div className="geometric-shape shape-4 parallax-element"></div>
          
          {/* Glowing orbs */}
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text scroll-reveal-left">
            <h1 className="hero-title">
              Hi, I'm Abiral Pokharel
            </h1>
            <h2 className="hero-subtitle">
              I'm a <span className="typing-container">
                <span className="typing-text">{text}</span>
              </span>
            </h2>
            <p className="hero-description">
              A passionate {currentAge}-year-old IT student from Itahari International College, 
              dedicated to exploring the endless possibilities of technology 
              and creating innovative solutions for tomorrow's challenges.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary hover-lift">
                Get In Touch
              </Link>
              <a href="/Abiral Pokharel CV.pdf" className="btn btn-outline hover-lift" download>
                <Download size={20} />
                Download CV
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/gemuser" target="_blank" rel="noopener noreferrer" className="hover-lift">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/abiral-pokharel-054774310/" target="_blank" rel="noopener noreferrer" className="hover-lift">
                <Linkedin size={24} />
              </a>
              <a href="mailto:pokharel.abiral123@gmail.com" className="hover-lift">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="hero-image scroll-reveal-right">
            <div className="image-container hover-glow">
              <img 
                src={Abiral} 
                alt="Abiral Pokharel" 
                className="profile-image"
              />
              <div className="image-overlay"></div>
              
              {/* Floating tech icons */}
              <div className="tech-icons">
                <div className="tech-icon">
                  <Code size={20} />
                </div>
                <div className="tech-icon">
                  <Database size={20} />
                </div>
                <div className="tech-icon">
                  <Globe size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={handleScrollToNext}>
          <ChevronDown size={28} />
        </div>
      </section>

      <section className="about-preview section">
        <div className="container">
          <div className="grid grid-2">
            <div className="about-content scroll-reveal-left">
              <h2 className="section-title">About Me</h2>
              <p className="about-text">
                I'm a {currentAge}-year-old IT student passionate about technology and programming. 
                Currently pursuing my degree at Itahari International College, I'm constantly 
                learning and growing in the field of technology.
              </p>
              <div className="stats">
                <div className="stat scroll-reveal-scale stagger-1">
                  <h3>{currentAge}</h3>
                  <p>Years Old</p>
                </div>
                <div className="stat scroll-reveal-scale stagger-2">
                  <h3>2nd</h3>
                  <p>Year Student</p>
                </div>
                <div className="stat scroll-reveal-scale stagger-3">
                  <h3>10+</h3>
                  <p>Projects</p>
                </div>
              </div>
              <Link to="/about" className="btn hover-lift">Learn More</Link>
            </div>
            <div className="about-image scroll-reveal-right">
              <img 
                src={Abiral1} 
                alt="About Abiral" 
                className="about-img hover-glow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="skills-preview section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card scroll-reveal-scale stagger-1 hover-lift">
              <h3>Frontend</h3>
              <p>React, JavaScript, HTML, CSS</p>
            </div>
            <div className="skill-card scroll-reveal-scale stagger-2 hover-lift">
              <h3>Backend</h3>
              <p>Node.js, Python, Java</p>
            </div>
            <div className="skill-card scroll-reveal-scale stagger-3 hover-lift">
              <h3>Database</h3>
              <p>MySQL, MongoDB</p>
            </div>
            <div className="skill-card scroll-reveal-scale stagger-4 hover-lift">
              <h3>Tools</h3>
              <p>Git, VS Code, Figma</p>
            </div>
          </div>
          <div className="text-center scroll-reveal">
            <Link to="/skills" className="btn hover-lift">View All Skills</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;