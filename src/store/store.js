import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

function getDevTools() {
    return process.env.NODE_ENV !== 'production' && (typeof window === 'object') && window.devToolsExtension
        ? window.devToolsExtension()
        : f => f;
}

export function configureStore(initialState = {
    questionList: null,
    questionAuthorList: null,
    questionTagList: null,
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