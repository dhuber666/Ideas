import React from 'react';
import Idea from './Idea';
import { Link } from 'react-router-dom';

export default class Ideas extends React.Component {

    state = {
        ideas: [
            {
                id: 0,
                title: "Calculator Application",
                body: "a description",
                claimed: false,
                likes: 3
            },
            {
                id: 1,
                title: "Tic Tac Toe Game",
                body: "a description",
                claimed: true,
                likes: 1
            }
        ]
    }

    renderIdeas = () => (
        this.state.ideas.map(idea => <Idea key={idea.id} {...idea} />)
    )

    addNewIdea = (title, body) => {
        const newIdea = { id: 2, title, body, claimed: false, likes: 0 }
        this.setState({
            ...this.state.ideas,
            newIdea
        })
    }

    render() {

        return (
            <div className="ideas-container">
                <h3 className="ideas-header">
                    Newest IDEAS
            </h3>
                <div className="ideas-list">
                    {this.renderIdeas()}
                    <Link to="/new" className="add-icon-container">
                        <i className="add-icon fas fa-plus fa-2x"></i>
                        <p>NEW IDEA</p>
                    </Link>

                </div>
            </div>
        )
    }
}
