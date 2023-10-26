import React from 'react'
import { render } from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App.jsx'
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import {
  composeWithDevTools
} from 'redux-devtools-extension';
import { useSelector } from 'react-redux'
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
render(
    <Provider store={store}>
      <br />
      <App />
    </Provider>,
    document.getElementById('root')
)
