var redux = require('redux');
var reduxRouter = require('redux-router');
var thunkMiddleware = require('redux-thunk');
var rootReducer = require('../reducers');
var createBrowserHistory = require('history/lib/createBrowserHistory');

var reduxReactRouter = reduxRouter.reduxReactRouter;
var compose = redux.compose;

var createStore = compose(
    redux.applyMiddleware(thunkMiddleware),
    reduxReactRouter({
        createHistory: createBrowserHistory
    })
)(redux.createStore);

module.exports = createStore(rootReducer);
