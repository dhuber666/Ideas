import React from 'react';


export default () => {
    return (
        <div className="header">
        <div className="navbar">
            <a href="#">Register</a>
            <a href="#">FAQ</a>
        </div>
        <h1 className="header-title">IDEAS</h1>
        <h2 className="header-subtitle">Share your Ideas and see it come to live</h2>

        <button className="header-button">Sign Up Now</button>
        <div className="header-circle">
            <i className="fas fa-arrow-down fa-2x"></i>
        </div>
        </div>
    )
}