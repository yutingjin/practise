/* @flow weak */
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

var createComposeStore = compose(
    applyMiddleware(thunkMiddleware)
)(createStore);

module.exports = createComposeStore(rootReducer);
