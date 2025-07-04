import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "Itahari International College",
      degree: "Bachelor's in Information Technology",
      duration: "2023 - Present",
      location: "Itahari, Nepal",
      status: "Currently pursuing 2nd Year",
      description: "Specializing in computer science fundamentals, programming languages, database management, and software development methodologies.",
      subjects: ["Programming Languages", "Database Systems", "Web Development", "Software Engineering", "Computer Networks", "Data Structures"]
    },
    {
      id: 2,
      institution: "Sikshadeep College",
      degree: "Higher Secondary Education (+2) - Science",
      duration: "2021 - 2023",
      location: "Biratnagar, Nepal",
      status: "Completed",
      description: "Completed higher secondary education with a focus on Science, building strong foundations in Mathematics, Physics, Chemistry, and Computer Science.",
      subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English", "Nepali"]
    },
    {
      id: 3,
      institution: "Modern Era Higher Secondary School",
      degree: "Secondary Education (SEE)",
      duration: "2019 - 2021",
      location: "Nepal",
      status: "Completed",
      description: "Completed secondary education with excellent grades, developing fundamental academic skills and discovering passion for technology.",
      subjects: ["Science", "Mathematics", "English", "Nepali", "Social Studies", "Computer Science"]
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Maintained consistent high grades throughout academic career",
      icon: <Award className="achievement-icon" />
    },
    {
      title: "Technology Focus",
      description: "Specialized in computer science and programming from early education",
      icon: <BookOpen className="achievement-icon" />
    },
    {
      title: "Leadership",
      description: "Participated in various school projects and technology competitions",
      icon: <Award className="achievement-icon" />
    }
  ];

  return (
    <div className="education-page">
      <div className="container">
        <section className="education-hero section">
          <h1 className="section-title scroll-reveal">Educational Journey</h1>
          <p className="education-intro scroll-reveal">
            My educational path has been focused on building a strong foundation in science 
            and technology, leading to my current pursuit of a Bachelor's degree in Information Technology.
          </p>
        </section>

        <section className="education-timeline section">
          <h2 className="section-title scroll-reveal">Academic Timeline</h2>
          <div className="timeline">
            {educationData.map((edu, index) => (
              <div key={edu.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} scroll-reveal stagger-${index + 1}`}>
                <div className="timeline-content">
                  <div className="education-card hover-lift">
                    <div className="card-header">
                      <h3 className="institution-name">{edu.institution}</h3>
                      <span className={`status ${edu.status === 'Completed' ? 'completed' : 'current'}`}>
                        {edu.status}
                      </span>
                    </div>
                    <h4 className="degree">{edu.degree}</h4>
                    <div className="education-meta">
                      <div className="meta-item">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <p className="education-description">{edu.description}</p>
                    <div className="subjects">
                      <h5>Key Subjects:</h5>
                      <div className="subjects-grid">
                        {edu.subjects.map((subject, idx) => (
                          <span key={idx} className="subject-tag">{subject}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-marker"></div>
              </div>
            ))}
          </div>
        </section>

        <section className="achievements section">
          <h2 className="section-title scroll-reveal">Academic Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className={`achievement-card scroll-reveal-scale stagger-${index + 1} hover-lift`}>
                {achievement.icon}
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="current-focus section">
          <h2 className="section-title scroll-reveal">Current Academic Focus</h2>
          <div className="focus-content">
            <div className="focus-item scroll-reveal-left hover-lift">
              <h3>Core Subjects</h3>
              <ul>
                <li>Advanced Programming Concepts</li>
                <li>Database Management Systems</li>
                <li>Software Engineering</li>
                <li>Computer Networks</li>
                <li>Web Development Technologies</li>
              </ul>
            </div>
            <div className="focus-item scroll-reveal-right hover-lift">
              <h3>Practical Learning</h3>
              <ul>
                <li>Hands-on Programming Projects</li>
                <li>Real-world Problem Solving</li>
                <li>Industry-Standard Tools</li>
                <li>Collaborative Development</li>
                <li>Technology Innovation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="future-plans section">
          <h2 className="section-title scroll-reveal">Future Academic Goals</h2>
          <div className="plans-grid">
            <div className="plan-card scroll-reveal-left hover-lift">
              <h3>Short-term Goals</h3>
              <ul>
                <li>Complete Bachelor's degree with distinction</li>
                <li>Master advanced programming languages</li>
                <li>Participate in technology competitions</li>
                <li>Complete industry internships</li>
              </ul>
            </div>
            <div className="plan-card scroll-reveal-right hover-lift">
              <h3>Long-term Vision</h3>
              <ul>
                <li>Pursue Master's in Computer Science</li>
                <li>Specialize in emerging technologies</li>
                <li>Contribute to research and development</li>
                <li>Share knowledge through teaching</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;