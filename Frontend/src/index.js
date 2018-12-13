import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

const history = createBrowserHistory();


const AppWithRouter = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

const store = createStore(rootReducer, applyMiddleware(thunk));
// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
          <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();