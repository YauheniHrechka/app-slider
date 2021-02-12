import React from 'react';
import './Slider.css';

import reducer from '../reducer';
import { prevSlide, nextSlide, firstSlide, lastSlide, chooseSlide } from '../actions';

import Slide from '../Slide/Slide';
import Pagination from '../Pagination/Pagination';

const Slider = ({ slides, startIndexSlide }) => {

    let startingX, activeDote;

    const [state, dispatch] = React.useReducer(reducer, {
        active: startIndexSlide,
        transition: 'all .3s'
    });

    const { active, transition } = state;

    const onClickPrev = () => {
        dispatch(prevSlide(active));
    }

    const onClickNext = () => {
        dispatch(nextSlide(active, slides));
    }

    const onTransition = () => {
        if (active + 1 === slides.length) {
            dispatch(firstSlide(active, slides));

        } else if (active === 0) {
            dispatch(lastSlide(slides));
        }
    }

    const onTouchStart = (event) => {
        startingX = event.touches[0].clientX;
    }

    const onTouchEnd = (event) => {
        let change = startingX - event.changedTouches[0].clientX;

        if (change > 0) {          // swipe right (next slide) ...
            dispatch(nextSlide(active, slides));

        } else if (change < 0) {   // swipe left (prev slide) ...
            dispatch(prevSlide(active));
        }
    }

    const onClickDotItem = (event) => {
        dispatch(chooseSlide(+event.target.getAttribute('data-item')));
    }

    if (active === slides.length - 1) {
        activeDote = 1;
    } else if (active === 0) {
        activeDote = slides.length - 2;
    } else {
        activeDote = active;
    }

    return (
        <>
            <div className="slider" onTransitionEnd={onTransition}>
                {slides.map((item, index) => {
                    return (
                        <Slide
                            key={`${item.id}-${index}`}
                            item={item}
                            transform={`translateX(-${active * 100}%)`}
                            transition={transition}
                            touchStart={onTouchStart}
                            touchEnd={onTouchEnd}
                        />
                    )
                })}
                <Pagination
                    amountDots={slides.length - 2}
                    active={activeDote}
                    paginationClick={onClickDotItem}
                />
            </div>
            <button className="btn btn-prev" onClick={onClickPrev}>&#8249;</button>
            <button className="btn btn-next" onClick={onClickNext}>&#8250;</button>
        </>
    )
}

export default Slider;