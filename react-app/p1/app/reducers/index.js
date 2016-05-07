/* @flow weak */
import { combineReducers } from 'redux';
import { Actions } from 'react-native-router-flux';
import assign from 'lodash/assign';
import compact from 'lodash/compact';
import uniqBy from 'lodash/uniqBy';
import actionTypes from '../actions/action_types';
import actionCodes from '../actions/action_code';

function loading(state = false, action) {
    switch (action.type) {
        case actionTypes.LOADING_START:
            return true;
        case actionTypes.RESET:
        case actionTypes.LOADING_END:
        case actionTypes.ERROR:
        case Actions.AFTER_POP:
            return false;
    }
    return state;
}

function message(state = null, action) {
    switch (action.type) {
        case actionTypes.MESSAGE:
            return {
                content: action.content,
                title: action.title
            };
        case actionTypes.RESET:
            return null
    }
    return state;
}

function error(state = {}, action) {
    switch (action.type) {
        case actionTypes.ERROR:
            let { category, data} = action;
            category = category || 'common';
            return assign({}, state, {[category]: data});
        case actionTypes.CLEAR_ERROR:
            return assign({}, state, {[action.category]: null});
        case actionTypes.RESET:
        case Actions.AFTER_POP:
            return {};

    }
    return state;
}

function menu(state = false, action) {
    switch (action.type) {
        case actionTypes.MENU:
            return action.menu;
    }
    return state;
}

function global(state = {}, action) {
    switch (action.type) {
        case Actions.AFTER_POP:
        case Actions.AFTER_ROUTE:
            return assign({}, state, {currentRoute: action.name});
        case actionTypes.APP_VERSION:
            return assign({}, state, {newVersion: action.version})
        case actionTypes.SHOW_USE_GUIDE:
            return assign({}, state, {showUseGuide: action.value})
    }
    return state;
}

var rootReducer = combineReducers({
    global, loading, message, error, menu
});

export default rootReducer;
