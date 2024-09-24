import React from 'react';
import '/Users/rajcharanreddy/Desktop/personal-portfolio/src/Home.css';

const Home = () => {
    return (
        <section className="about-me">
            <div className="container">
            <img 
                    src="https://media.licdn.com/dms/image/v2/D5635AQF3rBwY10NmFg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1720499736730?e=1726074000&v=beta&t=Lm5hESVLuwiHXQwHi5JrKqj0FZfiGY56qz003Frxv6k" 
                    alt="Profile" 
                    className="profile-photo" 
                />
                <h1>Raj Charan Reddy</h1>
                <p>
                    Hello! I'm Raj Charan Reddy, a recent B.Tech graduate from Vasavi College of Engineering. I am passionate about software development and am eager to start my career as a full-stack developer.
                </p>
                <p>
                    Throughout my academic journey, I have worked on several projects that fueled my passion for technology and problem-solving. I am driven by a desire to contribute to meaningful projects that can have a positive impact.
                </p>
                <p>
                    I am excited to explore opportunities where I can grow, learn, and collaborate with teams to bring innovative ideas to life. I am committed to continuously improving my craft and contributing to the success of any organization I am a part of.
                </p>
                <p>
                    Let's connect and discuss how we can work together!
                </p>
            </div>
        </section>
    );
}

export default Home;
