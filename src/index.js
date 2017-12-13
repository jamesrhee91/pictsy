import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import searchReducer from './reducers/searchReducer'
import filterReducer from './reducers/filterReducer'

const rootReducers = combineReducers({search: searchReducer, filter: filterReducer})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
