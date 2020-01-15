// Action types
export const SET_HISTORY_VISIBILITY = "SET_HISTORY_VISIBILITY";
export const ADD_HISTORY_ITEM = "ADD_HISTORY_ITEM";
export const CLEAR_HISTORY = "CLEAR_HISTORY";

// Action creators
export const setHistoryVisibility = function() {
    return (dispatch, getState) => {
        const { history: { visible }} = getState();
        dispatch({
            type: SET_HISTORY_VISIBILITY,
            visible: !visible
        })
    }
};

export const addHistoryItem = function(number, isPrime) {
    return {
        type: ADD_HISTORY_ITEM,
        number,
        isPrime
    }
};

export const clearHistory = function() {
    return {
        type: CLEAR_HISTORY
    }
};