import {
    UPDATE_NUMBER_VALUE,
    SET_IS_PRIME
} from '../actions/calculator';

const formInitialState = {
    number: "",
    isValid: true,
    errorMessage: "",
    isPrime: null
}

export default function form(state = formInitialState, action) {
    switch(action.type) {
        case UPDATE_NUMBER_VALUE:
            return {
                ...state,
                number: action.number,
                isValid: action.isValid,
                errorMessage: action.errorMessage
            };
        case SET_IS_PRIME:
            return {
                ...state,
                isPrime: action.isPrime,
                number: action.number
            }
        default:
            return state
    }
}