import actionTypes from './action_types';
import actionCodes from './action_code';

export const commonErrMsg = "unavailable";

export function loadingStart() {
    return {
        type: actionTypes.LOADING_START
    }
}

export function loadingEnd() {
    return {
        type: actionTypes.LOADING_END
    }
}

export function error(category, errorData) {
    return {
        type: actionTypes.ERROR,
        category: category,
        data: errorData
    };
}

export function clearError(category) {
    return {
        type: actionTypes.CLEAR_ERROR,
        category: category,
    }
}

export function reset() {
    return {
        type: actionTypes.RESET
    }
}

export function message(message) {
    return {
        type: actionTypes.MESSAGE,
        content: message
    }
}

export function menu(isOpen) {
    return {
        type: actionTypes.MENU,
        menu: isOpen
    }
}

export function isConnected(connected) {
    return {
        type: actionTypes.CONNECTED,
        connected: connected
    }
}

export function processError(dispatch, err, resp, category) {
    if (err) {
        dispatch(error(category, {message: commonErrMsg}));
        return true;
    } else if (typeof resp.res_code === 'number') {
        if (resp.res_code == actionCodes.SERVER_ERROR) {
            dispatch(error(category, {message: "unavailable"}));
            return true;
        } else if (resp.res_code !== actionCodes.OK) {
            dispatch(error(category, {message: resp.message || "unavailable"}));
            return true;
        }
    }
    return false;
}

