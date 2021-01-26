import React from 'react';
import './Slider.css';

function Slider({ slides }) {

    return (
        <div className="slider">

            <button className="btn btn-prev">prev</button>
            <button className="btn btn-next">next</button>
        </div>
    )
}

export default Slider;