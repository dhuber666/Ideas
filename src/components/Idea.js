import React from 'react';

// TODO: Add a way to open up a Idea to see it's full content

export default ({ title, claimed, likes, toggled, toggleIdea, id, body }) => {


    // toggled and with open body
    if (toggled) {
        return (
            <div className="idea-item-container-toggled">

                <div className="idea-header-container">
                    <div className="idea-like-container">
                        <i className="fas fa-angle-up"></i>
                        <p className="idea-like-count">{likes}</p>
                    </div>
                    <div className="idea-status" style={{ background: claimed ? "#7CA0FF" : "#DFE8FF" }}></div>
                    <p className="idea-title">{title}</p>
                    <i onClick={() => toggleIdea(id)} className="fas fa-angle-up fa-2x"></i>
                </div>
                <div className="idea-body-wrapper">
                    <hr />

                    <p className="idea-body">{body}</p>
                </div>


            </div>
        )
    }

    // closed idea

    return (
        <div className="idea-item-container">
            <div className="idea-like-container">
                <i className="fas fa-angle-up"></i>
                <p className="idea-like-count">{likes}</p>
            </div>
            <div className="idea-status" style={{ background: claimed ? "#7CA0FF" : "#DFE8FF" }}></div>
            <p className="idea-title">{title}</p>
            <i onClick={() => toggleIdea(id)} className="fas fa-angle-down fa-2x"></i>
        </div>
    )
}