import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import history from "./history";
import { configureStore } from './store/store';
const store = configureStore();

const Application = () => (
    <Provider store={ store }>
        <Router history={ history }>
            <App />
        </Router>
    </Provider>
);

const renderApplication = () => {
    ReactDOM.render(<Application/>, document.getElementById('root'));
}

renderApplication();