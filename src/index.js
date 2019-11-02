import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import authReducer from './Store/reducers/auth';
import adminReducer from './Store/reducers/admin';
import projectReducer from './Store/reducers/project'
import userReducer from './Store/reducers/user';
import groupReducer from './Store/reducers/group';
import epicReducer from './Store/reducers/epic';
import issueReducer from './Store/reducers/issues';
import sprintReducer from './Store/reducers/sprint'
import memberReducer from './Store/reducers/member'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    project : projectReducer,
    group: groupReducer,
    user: userReducer,
    epic : epicReducer,
    issue: issueReducer,
    sprint: sprintReducer,
    member: memberReducer,
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
serviceWorker.unregister();
