import React from 'react';
import { Link } from 'react-router-dom';

export default class NewIdea extends React.Component {

    state = {
        title: "",
        body: ""
    }

    handleSubmitBtn = () => {
        // create a new idea
        const { title, body } = this.state;
        this.props.addNewIdea(title, body)

    }


    render() {
        return (
            <div className="new-idea-container">
                <div className="new-idea-box">
                    <h2 className="new-idea-title">Create a new IDEA</h2>
                    <input className="new-idea-input-title" type="text" placeholder="Title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                    <div contentEditable className="new-idea-textarea" placeholder="Write a detailled Description of your IDEA" onChange={(e) => this.setState({ body: e.target.value })}>{this.state.body}</div>
                    <div className="new-idea-btn-wrapper">
                        <input className="new-idea-submit-btn" type="submit" value="Submit" onClick={this.handleSubmitBtn} />
                        <Link className="new-idea-cancel-btn" to="/">
                            <input className="new-idea-cancel-btn" type="submit" value="Cancel" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}