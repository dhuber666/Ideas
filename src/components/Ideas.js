import React from 'react';
import Idea from './Idea';
import { Link } from 'react-router-dom';

export default class Ideas extends React.Component {



    renderIdeas = () => (
        this.props.ideas.map(idea => <Idea key={idea.id} {...idea} {...this.props} />)
    )



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
