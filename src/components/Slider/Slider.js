import React from 'react';
import './Slider.scss';

import { Context } from '../context';
import reducer from '../reducer';
import { prevSlide, nextSlide, firstSlide, lastSlide, chooseSlide } from '../actions';

import Slide from '../Slide/Slide';
import Pagination from '../Pagination/Pagination';

const Slider = ({ slides, startIndexSlide }) => {

    let startingX;

    const [state, dispatch] = React.useReducer(reducer, {
        active: startIndexSlide,
        activeDot: startIndexSlide,
        transition: 'all .3s'
    });

    const { active, activeDot, transition } = state;

    const onClickPrev = () => {
        dispatch(prevSlide(active, slides));
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
            dispatch(prevSlide(active, slides));
        }
    }

    const onClickDotItem = (event) => {
        dispatch(chooseSlide(+event.target.getAttribute('data-item'), slides));
    }

    const generateDotItems = React.useCallback(() => {
        return new Array(slides.length - 2).fill(null);
    }, [slides]);

    return (
        <Context.Provider value={{
            onTouchStart, onTouchEnd, onClickDotItem
        }} >
            <>
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
                    <Pagination
                        getDots={generateDotItems}
                        active={activeDot}
                    />
                </div>
                <button className="btn btn-prev" onClick={onClickPrev}>&#8249;</button>
                <button className="btn btn-next" onClick={onClickNext}>&#8250;</button>
            </>
        </Context.Provider>
    )
}

export default Slider;