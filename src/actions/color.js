import {CHANGE_COLOR} from './actionTypes';

export const changeColor = () => {
    return (dispatch) => {
        dispatch({type: CHANGE_COLOR })
    }
}