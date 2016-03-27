import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import assign from 'object-assign';

function message(state, action) {
    switch (action.type) {
        case "message":
            return {
                content: action.content,
                title: action.title
            };
        case reset:
            return null
    }
    return state || null;
}

var router = routerStateReducer;

var rootReducer = combineReducers({
    router, message
});

export default rootReducer;