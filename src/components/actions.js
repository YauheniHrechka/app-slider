
const getActiveDot = (active, slides) => {
    if (active === slides.length - 1) {
        return 1;

    } else if (active === 0) {
        return slides.length - 2;
    }
    return active;
}

export const prevSlide = (active, slides) => {
    const newActive = active === 0 ? active : active - 1;
    return {
        type: 'PREV_SLIDE',
        payload: {
            active: newActive,
            activeDot: getActiveDot(newActive, slides),
            transition: 'all .3s'
        }
    }
}

export const nextSlide = (active, slides) => {
    const newActive = active === slides.length - 1 ? active : active + 1;
    return {
        type: 'NEXT_SLIDE',
        payload: {
            active: newActive,
            activeDot: getActiveDot(newActive, slides),
            transition: 'all .3s'
        }
    }
}

export const firstSlide = (active, slides) => {
    const newActive = slides.length - active;
    return {
        type: 'FIRST_SLIDE',
        payload: {
            active: newActive,
            activeDot: getActiveDot(newActive, slides),
            transition: 'none'
        }
    }
}

export const lastSlide = (slides) => {
    const newActive = slides.length - 2;
    return {
        type: 'LAST_SLIDE',
        payload: {
            active: newActive,
            activeDot: getActiveDot(newActive, slides),
            transition: 'none'
        }
    }
}

export const chooseSlide = (active, slides) => ({
    type: 'CHOOSE_SLIDE',
    payload: {
        active: active,
        activeDot: getActiveDot(active, slides),
        transition: 'all .3s'
    }
})