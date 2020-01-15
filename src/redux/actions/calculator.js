import { validateNumber, isPrime as isPrimeNumber } from '../../utils';
import { addHistoryItem } from './history';

// Action types
export const UPDATE_NUMBER_VALUE = "UPDATE_NUMBER_FIELD";
export const SET_IS_PRIME = "SET_IS_PRIME";

// Action creators
export const updateNumberValue = function(value) {
    const { number, isValid = true, errorMessage = "" } = validateNumber(value);
    return {
        type: UPDATE_NUMBER_VALUE,
        number,
        isValid,
        errorMessage
    }
}

const setIsPrimeNumber = function(number, isPrime) {
    return {
        type: SET_IS_PRIME,
        isPrime,
        number
    }
}

export const submitForm = function(e) {
    e.preventDefault();
    
    return (dispatch, getState) => {
        const { history: { items }, calculator: { number, isPrime: currentIsPrime } } = getState();
        const isSubmitting = currentIsPrime === null;

        if (isSubmitting) {
            const isPrime = items[number] !== undefined ? items[number] : isPrimeNumber(Number(number));
            dispatch(setIsPrimeNumber (number, isPrime));
            dispatch(addHistoryItem(number, isPrime));
        } else {
            dispatch(setIsPrimeNumber("", null));
        }
    }
}
