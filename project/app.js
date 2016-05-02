// import 'material-design-icons/iconfont/material-icons.css';
// import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import { Router } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Main from './pages/Main/Main';

import rootReducer from './reducers/root-reducer';
import { createStoreWithMiddleware } from './store/create-store';


// App level styles
// import './app.less';

const store = createStoreWithMiddleware(rootReducer);

render(
	<Provider store={store}>
		<Main />
	</Provider>, document.getElementById('react'));
