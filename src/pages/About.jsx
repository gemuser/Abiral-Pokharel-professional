import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react';
import { getCurrentAge, BIRTH_DATE } from '../utils/ageCalculator';
import './About.css';
import Abiral1 from '../assets/Abiral1.jpg'; // Assuming you have another image for the about section

const About = () => {
  const currentAge = getCurrentAge();
  const birthYear = new Date(BIRTH_DATE).getFullYear();

  return (
    <div className="about-page">
      <div className="container">
        <section className="about-hero section">
          <div className="grid grid-2">
            <div className="about-content scroll-reveal-left">
              <h1 className="section-title">About Me</h1>
              <p className="about-intro">
                Hello! I'm Abiral Pokharel, a {currentAge}-year-old IT student with a passion for 
                technology and innovation. Born on June 29, {birthYear}, I'm currently pursuing 
                my degree at Itahari International College and constantly exploring new 
                frontiers in the digital world.
              </p>
              
              <div className="info-grid">
                <div className="info-item scroll-reveal-scale stagger-1 hover-lift">
                  <Calendar className="info-icon" />
                  <div>
                    <h3>Age</h3>
                    <p>{currentAge} years old (Born June 29, {birthYear})</p>
                  </div>
                </div>
                <div className="info-item scroll-reveal-scale stagger-2 hover-lift">
                  <MapPin className="info-icon" />
                  <div>
                    <h3>Location</h3>
                    <p>Itahari, Nepal</p>
                  </div>
                </div>
                <div className="info-item scroll-reveal-scale stagger-3 hover-lift">
                  <GraduationCap className="info-icon" />
                  <div>
                    <h3>Current Status</h3>
                    <p>2nd Year IT Student</p>
                  </div>
                </div>
                <div className="info-item scroll-reveal-scale stagger-4 hover-lift">
                  <Award className="info-icon" />
                  <div>
                    <h3>Focus</h3>
                    <p>Full-Stack Development</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image scroll-reveal-right">
              <img 
                src={Abiral1} 
                alt="Abiral Pokharel" 
                className="profile-img hover-glow"
              />
            </div>
          </div>
        </section>

        <section className="journey section">
          <h2 className="section-title scroll-reveal">My Journey</h2>
          <div className="journey-content">
            <div className="journey-text scroll-reveal">
              <p>
                My journey into the world of technology began during my school years at 
                Modern Era Higher Secondary School, where I first discovered my fascination 
                with computers and programming. This early interest led me to pursue Science 
                in my +2 studies at Sikshadeep College, Biratnagar, where I developed a 
                strong foundation in logical thinking and problem-solving.
              </p>
              <p>
                Currently, as a second-year student at Itahari International College, I'm 
                diving deep into the world of Information Technology. Every day brings new 
                challenges and opportunities to learn, whether it's mastering a new programming 
                language, understanding complex algorithms, or working on innovative projects.
              </p>
              <p>
                My passion extends beyond just coding; I'm interested in the entire spectrum 
                of technology - from web development and mobile applications to emerging 
                technologies like AI and machine learning. I believe technology has the power 
                to transform lives and solve real-world problems, and I'm excited to be part 
                of this transformation.
              </p>
            </div>
          </div>
        </section>

        <section className="values section">
          <h2 className="section-title scroll-reveal">What Drives Me</h2>
          <div className="values-grid">
            <div className="value-card scroll-reveal-scale stagger-1 hover-lift">
              <h3>Continuous Learning</h3>
              <p>
                Technology evolves rapidly, and I'm committed to staying updated with the 
                latest trends, tools, and best practices in the field.
              </p>
            </div>
            <div className="value-card scroll-reveal-scale stagger-2 hover-lift">
              <h3>Innovation</h3>
              <p>
                I believe in thinking outside the box and finding creative solutions to 
                complex problems through technology.
              </p>
            </div>
            <div className="value-card scroll-reveal-scale stagger-3 hover-lift">
              <h3>Collaboration</h3>
              <p>
                The best solutions come from working together. I value teamwork and 
                enjoy learning from others' experiences.
              </p>
            </div>
            <div className="value-card scroll-reveal-scale stagger-4 hover-lift">
              <h3>Impact</h3>
              <p>
                I'm passionate about creating technology that makes a positive difference 
                in people's lives and society.
              </p>
            </div>
          </div>
        </section>

        <section className="goals section">
          <h2 className="section-title scroll-reveal">Future Goals</h2>
          <div className="goals-content">
            <div className="goal-item scroll-reveal-left hover-lift">
              <h3>Short-term Goals</h3>
              <ul>
                <li>Complete my IT degree with excellence</li>
                <li>Master full-stack web development</li>
                <li>Contribute to open-source projects</li>
                <li>Build a strong portfolio of projects</li>
              </ul>
            </div>
            <div className="goal-item scroll-reveal-right hover-lift">
              <h3>Long-term Vision</h3>
              <ul>
                <li>Become a skilled software architect</li>
                <li>Start my own tech company</li>
                <li>Mentor young developers</li>
                <li>Contribute to Nepal's tech ecosystem</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;