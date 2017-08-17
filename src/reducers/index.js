import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { i18nReducer } from 'react-redux-i18n';
import counter from './counter';
import github from './github';

export default combineReducers({
    routing: routerReducer,
    i18n: i18nReducer,

    counter,
    github
});
