import React from 'react';
import './Slide.scss';

import { Context } from '../context';

const Slide = ({ item: { url, alt }, transform, transition }) => {

    const { onTouchStart, onTouchEnd } = React.useContext(Context);

    return (
        <div
            className="slide"
            style={{
                transform: transform,
                transition: transition
            }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <img src={url} alt={alt} />
        </div>
    )
}

export default Slide;