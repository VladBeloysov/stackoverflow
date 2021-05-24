import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

function getDevTools() {
    return process.env.NODE_ENV !== 'production' && (typeof window === 'object') && window.devToolsExtension
        ? window.devToolsExtension()
        : f => f;
}

export function configureStore(initialState = {
    questionPromis: null,
    answer: null,
    rew: '12345'
}){
    let middlewares = [thunk];
    let enhanser = compose(
        applyMiddleware(...middlewares),
        getDevTools()
    );
    return createStore(
        reducers,
        initialState,
        enhanser
    );
}