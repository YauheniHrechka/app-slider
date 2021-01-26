import React from 'react';
import './Slider.css';

import Slide from '../Slide/Slide';

function Slider({ slides }) {

    const [active, setActive] = React.useState(1);
    const [transition, setTransition] = React.useState('all .3s');

    const onClickPrev = () => {
        setTransition('all .3s');
        setActive(active - 1);
    }

    const onClickNext = () => {
        setTransition('all .3s');
        setActive(active + 1);
    }

    const onTransition = () => {

        if (active + 1 === slides.length) {
            setActive(slides.length - active);
            setTransition('none');

        } else if (active === 0) {
            setActive(slides.length - 2);
            setTransition('none');
        }
    }

    return (
        <div className="slider" onTransitionEnd={onTransition}>
            {slides.map((item, index) => {
                return (
                    <Slide
                        key={`${item.id}-${index}`}
                        item={item}
                        transform={`translateX(-${active * 100}%)`}
                        transition={transition}
                    />
                )
            })}
            <button className="btn btn-prev" onClick={onClickPrev}>&#8249;</button>
            <button className="btn btn-next" onClick={onClickNext}>&#8250;</button>
        </div>
    )
}

export default Slider;