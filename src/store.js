import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import {
    loadTranslations,
    setLocale,
    syncTranslationWithStore
} from 'react-redux-i18n';
import langs from './components/i18n/index';

export const history = createHistory({
    basename: '/create-react-redux-app'
});

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

// set i18n
syncTranslationWithStore(store);
store.dispatch(loadTranslations(langs));
store.dispatch(setLocale('tr'));

export default store;
