// Action types
export const SET_HISTORY_VISIBILITY = "SET_HISTORY_VISIBILITY";
export const ADD_HISTORY_ITEM = "ADD_HISTORY_ITEM";
export const CLEAR_HISTORY = "CLEAR_HISTORY";

// Action creators
const setHistoryVisibility = function(visible) {
    return {
        type: SET_HISTORY_VISIBILITY,
        visible
    }
};

export const addHistoryItem = function(number, isPrime) {
    return {
        type: ADD_HISTORY_ITEM,
        number,
        isPrime
    }
};

const clearHistory = function() {
    return {
        type: CLEAR_HISTORY
    }
};

export default { setHistoryVisibility, addHistoryItem, clearHistory };