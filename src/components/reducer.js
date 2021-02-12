const reducer = (state, action) => {

    switch (action.type) {
        case 'PREV_SLIDE':
            return action.payload;

        case 'NEXT_SLIDE':
            return action.payload;

        case 'FIRST_SLIDE':
            return action.payload;

        case 'LAST_SLIDE':
            return action.payload;

        case 'CHOOSE_SLIDE':
            return action.payload;

        default:
            return state
    }
}

export default reducer;