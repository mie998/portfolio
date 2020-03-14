import React from 'react'
import './styles/About.scss'

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="about">
                    <h2 className="content-title">About</h2>
                    <div className="about-content">Name</div>
                    <div className="about-content">Age</div>
                    <div className="about-content">Birthday</div>
                    <div className="about-content">School</div>
                    <div className="about-content">Lives</div>
                </div>
            </div>
        );
    }
}

export default About;
