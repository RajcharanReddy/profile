import React, { useState } from 'react';
import '/Users/rajcharanreddy/Desktop/personal-portfolio/src/Achivements.css'; // Ensure this path is correct

const Certifications = () => {
  // State to manage certifications (achievements)
  const [certifications, setCertifications] = useState([
    {
      title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      description: 'Certification',
      imageUrl: '', // Image can be uploaded
    },
    {
      title: 'Introduction to Programming in C',
      description: 'Certification',
      imageUrl: '', // Image can be uploaded
    },
  ]);

  // State for new certification form
  const [newCertification, setNewCertification] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });

  // State to manage skills
  const [skills, setSkills] = useState(['React', 'JavaScript', 'Python', 'CSS']);

  // Handler for new certification form input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCertification((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewCertification((prev) => ({ ...prev, imageUrl }));
    }
  };

  // Add new certification
  const handleAddCertification = () => {
    setCertifications((prev) => [...prev, newCertification]);
    setNewCertification({ title: '', description: '', imageUrl: '' });
  };

  // Edit certification (basic title and description editing)
  const handleEditCertification = (index, updatedCertification) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index] = updatedCertification;
    setCertifications(updatedCertifications);
  };

  // Render component
  return (
    <div className="certifications-container">
      {/* Certifications Section */}
      <div className="certifications-section">
        <h2>Certifications</h2>
        <div className="certifications-list">
          {certifications.map((certification, index) => (
            <div key={index} className="certification-card">
              <h3>{certification.title}</h3>
              <p>{certification.description}</p>
              {certification.imageUrl && (
                <img src={certification.imageUrl} alt={certification.title} className="certification-image" />
              )}
              {/* Edit functionality */}
              <button
                onClick={() =>
                  handleEditCertification(index, {
                    ...certification,
                    title: prompt('Edit Title:', certification.title) || certification.title,
                    description: prompt('Edit Description:', certification.description) || certification.description,
                  })
                }
              >
                Edit
              </button>
            </div>
          ))}
        </div>
        {/* Add new certification form */}
        <div className="new-certification-form">
          <h3>Add New Certification</h3>
          <input
            type="text"
            name="title"
            placeholder="Certification Title"
            value={newCertification.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Certification Description"
            value={newCertification.description}
            onChange={handleInputChange}
          />
          <input type="file" onChange={handleImageUpload} />
          <button onClick={handleAddCertification}>Add Certification</button>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
