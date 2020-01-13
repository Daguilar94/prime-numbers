import {
    SET_HISTORY_VISIBILITY,
    ADD_HISTORY_ITEM,
    CLEAR_HISTORY
} from '../actions/history';

const historyInitialState = {
    items: [],
    visible: true
};

export default function history(state = historyInitialState, action) {
    switch(action.type) {
        case SET_HISTORY_VISIBILITY:
            return {
                ...state,
                visible: action.visible
            };
        case ADD_HISTORY_ITEM:
            return {
                ...state,
                items: [...state.items, action.item]
            }
        case CLEAR_HISTORY:
            return {
                ...state,
                items: []
            }
        default:
            return state
    }
};