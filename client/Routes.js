import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import DrumKit from './components/DrumKit'

const Routes = (
			<Router history={hashHistory}>
		    	<Route path="/" component={App}>
			        <IndexRoute component={DrumKit} />
		      </Route>
		    </Router>
		);



export default Routes;
