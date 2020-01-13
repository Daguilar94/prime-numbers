// Action types
export const SET_HISTORY_VISIBILITY = "SET_HISTORY_VISIBILITY";
export const ADD_HISTORY_ITEM = "ADD_HISTORY_ITEM";
export const CLEAR_HISTORY = "CLEAR_HISTORY";

// Action creators
export const setHistoryVisibility = function(visible) {
    return {
        type: SET_HISTORY_VISIBILITY,
        visible
    }
};

export const addHistoryItem = function(item) {
    return {
        type: ADD_HISTORY_ITEM,
        item
    }
};

export const clearHistory = function() {
    return {
        type: CLEAR_HISTORY
    }
};