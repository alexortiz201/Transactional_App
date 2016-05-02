import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; // eslint-disable-line no-unused-vars

import Main from './pages/Main/Main'; // eslint-disable-line no-unused-vars

import rootReducer from './reducers/root-reducer';
import { createStoreWithMiddleware } from './store/create-store';

const store = createStoreWithMiddleware(rootReducer);
const initialJSX = <Provider store={store}><Main /></Provider>;
render(
	initialJSX, document.getElementById('react'));
