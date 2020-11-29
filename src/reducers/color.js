import { CHANGE_COLOR } from 'actions/actionTypes';

const initialState = {
    colorIndex: 0,
    colorSelected: 'darkslategrey',
    colors: [
        'darkslategrey',
        'darkmagenta',
        'darkolivegreen',
        'darkblue',
        'darkorange',
        'darklateblue',
        'darkred',
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_COLOR:
            let newColorIndex = state.colorIndex + 1;
            if (newColorIndex >= state.colors.length) newColorIndex = 0;
            state = {
                ...state,
                colorIndex: newColorIndex,
                colorSelected: state.colors[newColorIndex],
            };
            break;
    }
    return state;
};
