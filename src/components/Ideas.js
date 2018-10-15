import React from 'react';
import Idea from './Idea';

export default class Ideas extends React.Component {

    state = {
        ideas: [
            {
                id: 0,
                title: "Calculator Application",
                claimed: false,
                likes: 3
            },
            {
                id: 1,
                title: "Tic Tac Toe Game",
                claimed: true,
                likes: 1
            }
        ]
    }

    renderIdeas = () => (
        this.state.ideas.map(idea => <Idea {...idea} />)
    )

    render() {

        return (
            <div className="ideas-container">
            <h3 className="ideas-header">
                Newest IDEAS
            </h3>
            <div className="ideas-list">
                {this.renderIdeas()}
                <div className="add-icon-container">
                <i className="add-icon fas fa-plus fa-2x"></i>
                <p>NEW IDEA</p>
                </div>
                
            </div>
            </div>
        )
    }
}
