import React from 'react';

export default ({title, claimed, likes}) => (
    <div className="idea-item-container">
        <div className="idea-like-container">
            <i className="fas fa-angle-up"></i>
            <p className="idea-like-count">{likes}</p>
        </div>
        <div className="idea-status" style={{background: claimed ? "#7CA0FF" : "#DFE8FF"}}></div>
        <p className="idea-title">{title}</p>
        <i className="fas fa-angle-down fa-2x"></i>
    </div>
)