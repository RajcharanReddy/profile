import React from 'react';
import '/Users/rajcharanreddy/Desktop/personal-portfolio/src/skills.css'; // Ensure the path is correct

const Skills = () => {
  const skillCategories = {
    "Languages": {
      skills: ['C', 'Python', 'Java'],
      image: "https://img.freepik.com/premium-photo/python-programming-code-abstract-technology-background_272306-146.jpg?w=2000" // Replace with actual URL
    },
    "Web Technologies": {
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.JS'],
      image: "https://img.freepik.com/premium-vector/software-development-studying-tutor-explain-students-programmers-programming-courses-from-huge-laptop-monitor-tiny-characters-study-online-webinar-cartoon-people-vector-illustration_87771-11345.jpg?w=1800"
    },
    "Databases": {
      skills: ['MongoDB', 'MySQL'],
      image: "https://img.freepik.com/free-vector/database-floating-squares_78370-6689.jpg?t=st=1725378485~exp=1725382085~hmac=777b7107c5a7d0331c17e520564ffa3e5a01db3269ed07682bb810da2e208a8a&w=1380"
    },
    "IDEs": {
      skills: ['Visual Studio Code', 'NetBeans', 'IntelliJ IDEA'],
      image: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2023_07_IDE-full-form-1.jpg"
    },
    "Version Control": {
      skills: ['GIT', 'GitHub'],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKbXeZtY-AR6kipTwjYsr4qLPgkkID67EeQ&s"
    },
    "CS Fundamentals": {
      skills: ['Data Structures and Algorithms', 'Operating Systems', 'Networking'],
      image: "https://miro.medium.com/v2/resize:fit:1400/1*4ZcW5tSdizlbtDQyVpRTuA.jpeg"
    }
  };

  return (
    <div className="skills">
      {Object.entries(skillCategories).map(([category, { skills, image }], index) => (
        <div key={index} className="skill-category">
          <img 
            src={image} 
            alt={`${category} image`} 
            className="category-image" 
          />
          <div className="category-info">
            <h3>{category}</h3>
            <div className="skills-list">
              {skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
