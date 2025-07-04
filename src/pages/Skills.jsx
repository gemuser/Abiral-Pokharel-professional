import { useState } from 'react';
import { Code, Database, Globe, Wrench, Brain, Users } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillCategories = {
    technical: {
      title: 'Technical Skills',
      icon: <Code size={24} />,
      skills: [
        { name: 'JavaScript', level: 70, category: 'Programming' },
        { name: 'Python', level: 60, category: 'Programming' },
        { name: 'Java', level: 75, category: 'Programming' },
        { name: 'C++', level: 20, category: 'Programming' },
        { name: 'HTML/CSS', level: 90, category: 'Web Development' },
        { name: 'React', level: 80, category: 'Web Development' },
        { name: 'Node.js', level: 70, category: 'Web Development' },
        { name: 'Express.js', level: 70, category: 'Web Development' },
        { name: 'MySQL', level: 80, category: 'Database' },
        { name: 'MongoDB', level: 75, category: 'Database' },
        { name: 'Git', level: 85, category: 'Tools' },
        { name: 'Linux', level: 80, category: 'Tools' }
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: <Users size={24} />,
      skills: [
        { name: 'Problem Solving', level: 90, category: 'Cognitive' },
        { name: 'Critical Thinking', level: 85, category: 'Cognitive' },
        { name: 'Communication', level: 80, category: 'Interpersonal' },
        { name: 'Teamwork', level: 85, category: 'Interpersonal' },
        { name: 'Leadership', level: 75, category: 'Interpersonal' },
        { name: 'Time Management', level: 80, category: 'Personal' },
        { name: 'Adaptability', level: 85, category: 'Personal' },
        { name: 'Creativity', level: 80, category: 'Personal' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: <Wrench size={24} />,
      skills: [
        { name: 'Visual Studio Code', level: 90, category: 'IDE' },
        { name: 'IntelliJ IDEA', level: 75, category: 'IDE' },
        { name: 'Figma', level: 70, category: 'Design' },
        { name: 'Photoshop', level: 60, category: 'Design' },
        { name: 'Postman', level: 80, category: 'API Testing' },
        { name: 'Docker', level: 60, category: 'DevOps' },
        { name: 'Firebase', level: 70, category: 'Cloud' },
        { name: 'Netlify', level: 75, category: 'Cloud' }
      ]
    }
  };

  const certifications = [
    {
      name: 'JavaScript Fundamentals',
      issuer: 'freeCodeCamp',
      date: '2023',
      status: 'Completed'
    },
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2023',
      status: 'Completed'
    },
    {
      name: 'Python Programming',
      issuer: 'Coursera',
      date: '2024',
      status: 'In Progress'
    },
    {
      name: 'Database Design',
      issuer: 'edX',
      date: '2024',
      status: 'Planned'
    },
    {
      name: 'Java Object-Oriented Programming',
      issuer: 'Linked In Learning',
      date: '2025',
      status: 'Completed'
    }
  ];

  return (
    <div className="skills-page">
      <div className="container">
        <section className="skills-hero section">
          <h1 className="section-title scroll-reveal">Skills & Expertise</h1>
          <p className="skills-intro scroll-reveal">
            As a passionate IT student, I'm constantly expanding my technical toolkit 
            and developing both hard and soft skills essential for success in the technology field.
          </p>
        </section>

        <section className="skills-categories section">
          <div className="category-tabs scroll-reveal">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                className={`category-tab ${activeCategory === key ? 'active' : ''} hover-lift`}
                onClick={() => setActiveCategory(key)}
              >
                {category.icon}
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          <div className="skills-content">
            <h2 className="category-title scroll-reveal">{skillCategories[activeCategory].title}</h2>
            <div className="skills-grid">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className={`skill-card scroll-reveal-scale stagger-${(index % 6) + 1} hover-lift`}>
                  <div className="skill-header">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-category">{skill.category}</span>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="certifications section">
          <h2 className="section-title scroll-reveal">Certifications & Learning</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className={`certification-card scroll-reveal-scale stagger-${index + 1} hover-lift`}>
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-meta">
                  <span className="cert-date">{cert.date}</span>
                  <span className={`cert-status ${cert.status.toLowerCase().replace(' ', '-')}`}>
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="skill-development section">
          <h2 className="section-title scroll-reveal">Continuous Learning</h2>
          <div className="development-content">
            <div className="learning-approach scroll-reveal">
              <h3>My Learning Philosophy</h3>
              <p>
                I believe in continuous learning and staying updated with the latest technologies. 
                My approach combines theoretical knowledge with practical application, ensuring 
                I can solve real-world problems effectively.
              </p>
              <div className="learning-methods">
                <div className="method-item scroll-reveal-scale stagger-1 hover-lift">
                  <Brain className="method-icon" />
                  <div>
                    <h4>Self-Directed Learning</h4>
                    <p>Online courses, tutorials, and documentation</p>
                  </div>
                </div>
                <div className="method-item scroll-reveal-scale stagger-2 hover-lift">
                  <Code className="method-icon" />
                  <div>
                    <h4>Hands-on Practice</h4>
                    <p>Personal projects and coding challenges</p>
                  </div>
                </div>
                <div className="method-item scroll-reveal-scale stagger-3 hover-lift">
                  <Users className="method-icon" />
                  <div>
                    <h4>Collaborative Learning</h4>
                    <p>Group projects and peer programming</p>
                  </div>
                </div>
                <div className="method-item scroll-reveal-scale stagger-4 hover-lift">
                  <Globe className="method-icon" />
                  <div>
                    <h4>Community Engagement</h4>
                    <p>Tech meetups and online forums</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="future-skills section">
          <h2 className="section-title scroll-reveal">Skills I'm Developing</h2>
          <div className="future-skills-grid">
            <div className="future-skill-card scroll-reveal-scale stagger-1 hover-lift">
              <h3>Machine Learning</h3>
              <p>Exploring AI and ML algorithms to understand intelligent systems</p>
              <div className="skill-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '30%' }}></div>
                </div>
                <span className="skill-level">30%</span>
              </div>
            </div>
            <div className="future-skill-card scroll-reveal-scale stagger-2 hover-lift">
              <h3>Cloud Computing</h3>
              <p>Learning AWS and cloud architecture patterns</p>
              <div className="skill-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '25%' }}></div>
                </div>
                <span className="skill-level">25%</span>
              </div>
            </div>
            <div className="future-skill-card scroll-reveal-scale stagger-3 hover-lift">
              <h3>Mobile Development</h3>
              <p>React Native and Flutter for cross-platform apps</p>
              <div className="skill-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '40%' }}></div>
                </div>
                <span className="skill-level">40%</span>
              </div>
            </div>
            <div className="future-skill-card scroll-reveal-scale stagger-4 hover-lift">
              <h3>DevOps</h3>
              <p>CI/CD pipelines and containerization technologies</p>
              <div className="skill-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '35%' }}></div>
                </div>
                <span className="skill-level">35%</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;