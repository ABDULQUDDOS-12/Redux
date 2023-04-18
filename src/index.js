import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import allReducers from './Reducers/allReducers';
import { Provider } from 'react-redux';
const myStore = createStore(allReducers,
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
<Provider store={myStore}>
<App />
</Provider>,
document.getElementById('root')
); 