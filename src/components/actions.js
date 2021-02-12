export const prevSlide = (active) => ({
    type: 'PREV_SLIDE',
    payload: {
        active: active === 0 ? active : active - 1,
        transition: 'all .3s'
    }
})

export const nextSlide = (active, slides) => ({
    type: 'NEXT_SLIDE',
    payload: {
        active: active === slides.length - 1 ? active : active + 1,
        transition: 'all .3s'
    }
})

export const firstSlide = (active, slides) => ({
    type: 'FIRST_SLIDE',
    payload: {
        active: slides.length - active,
        transition: 'none'
    }
})

export const lastSlide = (slides) => ({
    type: 'LAST_SLIDE',
    payload: {
        active: slides.length - 2,
        transition: 'none'
    }
})

export const chooseSlide = (active) => ({
    type: 'CHOOSE_SLIDE',
    payload: {
        active: active,
        transition: 'all .3s'
    }
})