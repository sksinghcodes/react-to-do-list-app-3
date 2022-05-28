import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './reducer';
import { Provider } from 'react-redux';

setScreenHeight();
window.onresize = setScreenHeight;

function setScreenHeight() {
    document.documentElement.style.setProperty('--screen-height', window.innerHeight + 'px');
}
const store = createStore(rootReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);