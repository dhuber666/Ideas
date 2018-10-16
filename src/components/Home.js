import React from 'react';
import Ideas from './Ideas';
import Header from './Header';

export default (props) => (
    <div className="home-container">
        <div><Header /></div>
        <div><Ideas {...props} /></div>

    </div>
)