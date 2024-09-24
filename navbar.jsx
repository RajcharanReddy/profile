import React from 'react';
import { NavLink } from 'react-router-dom';
import "/Users/rajcharanreddy/Desktop/personal-portfolio/src/NavBar.css"; // Make sure to create and import a CSS file for custom styles

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light" style = {{borderWidth: 0}}>
            <p style={{ fontSize: '30px', color: 'white', marginTop: '20px', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>
                MyPortfolio
            </p>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" style = {{paddingLeft: 200}}>
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/skills">Skills</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/achievements">Achievements</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/projects">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
