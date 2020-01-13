import { validateNumber, isPrime as isPrimeNumber } from '../../utils';

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

export const setIsPrimeNumber = function(e, isPrime, number) {
    e.preventDefault();

    const value = typeof(isPrime) === "boolean" ? null : isPrimeNumber(Number(number));

    return {
        type: SET_IS_PRIME,
        isPrime: value,
        number: value === null ? "" : number
    }
}

export default { updateNumberValue, setIsPrimeNumber };