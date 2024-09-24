import React from 'react';
import '/Users/rajcharanreddy/Desktop/personal-portfolio/src/Projects.css'; // Ensure to create and add styles in this CSS file

const Projects = () => {
  return (
    <section className="projects">
      
      <div className="project-list">
        <div className="project-item">
          <h3>Leveraging Unused Farming Equipment</h3>
          <p>
            As the team lead, I directed the creation of a website where farmers can lend and rent equipment. The platform allows farmers to log in and upload equipment details, while tenants can view equipment information and daily rental costs. The main focus is on managing and maintaining equipment details. Additionally, the website provides farmers with extra information about its features, helping them leverage the system to generate additional income.
          </p>
          <p>
            <strong>Technologies Used:</strong> ReactJS, HTML, CSS, JavaScript, Flask, MySQL
          </p>
        </div>
        <div className="project-item">
          <h3>Blockchain Enabled Online Voting System</h3>
          <p>
            Developed a web application for the voting process that uses blockchain technology to ensure security and transparency. It removes the need for intermediaries, making it more efficient and cost-effective.
          </p>
          <p>
            <strong>Technologies Used:</strong> React, MongoDB, Ganache, MetaMask
          </p>
        </div>
        <div className="project-item">
          <h3>Underwater Object Detection Using Deep Learning</h3>
          <p>
            Led a project focused on developing an underwater object detection system leveraging state-of-the-art YOLOv5 and YOLOv9 algorithms. The project aimed to accurately detect and classify various underwater objects, including fish species, corals, and marine waste, despite the challenging underwater environment.
          </p>
          <p>
            Implemented and fine-tuned YOLOv5 and YOLOv9 for underwater detection using Kaggle's aquarium-pretrain dataset. Enhanced dataset quality with data augmentation, trained models, and evaluated performance using mean average precision (mAP) metrics. Optimized detection accuracy through model iteration.
          </p>
          <p>
            <strong>Technologies Used:</strong> YOLOv5, YOLOv9, Kaggle dataset, Data augmentation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
