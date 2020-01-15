import {
    SET_HISTORY_VISIBILITY,
    ADD_HISTORY_ITEM,
    CLEAR_HISTORY
} from '../actions/history';

const historyInitialState = {
    items: {},
    primes: [],
    notPrimes: [],
    visible: false
};

export default function history(state = historyInitialState, action) {
    switch(action.type) {
        case SET_HISTORY_VISIBILITY:
            return {
                ...state,
                visible: action.visible
            };
        case ADD_HISTORY_ITEM:
            const key = action.isPrime ? 'primes' : 'notPrimes';
            const items = state.items[action.number] !== undefined
                ? {...state.items}
                : {...state.items, [action.number]: action.isPrime }

            return {
                ...state,
                [key]: [ ...state[key], action.number ],
                items
            }
        case CLEAR_HISTORY:
            return {
                ...state,
                primes: [],
                notPrimes: []
            }
        default:
            return state
    }
};