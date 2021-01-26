import React from 'react';
import './Slide.css';

function Slide({ item: { url, alt }, transform, transition, touchStart, touchEnd }) {

    return (
        <div
            className="slide"
            style={{
                transform: transform,
                transition: transition
            }}
            onTouchStart={touchStart}
            onTouchEnd={touchEnd}
        >
            <img src={url} alt={alt} />
        </div>
    )
}

export default Slide;