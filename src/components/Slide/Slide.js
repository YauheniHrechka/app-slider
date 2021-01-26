import React from 'react';
import './Slide.css';

function Slide({ item: { url, alt }, transform, transition }) {

    return (
        <div className="slide" style={{
            transform: transform,
            transition: transition
        }} >
            <img src={url} alt={alt} />
        </div>
    )
}

export default Slide;