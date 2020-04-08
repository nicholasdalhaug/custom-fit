import React from 'react';
import NavBar from './components/navbar/Navbar';
import Overview from './pages/Overview';
import Exercises from './pages/Exercises';
import PageNotFound from './pages/PageNotFound';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import {theme} from './resources/theme'
import 'typeface-roboto';

function App() {
	return <>
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route exact path={process.env.PUBLIC_URL} >
						<Redirect to={process.env.PUBLIC_URL + '/overview'} />
					</Route>
					<Route exact path={process.env.PUBLIC_URL + '/overview'}>
						<NavBar title="Overview" />
						<Overview />
					</Route>
					<Route exact path={process.env.PUBLIC_URL + '/exercises'}>
						<NavBar title="Exercises" />
						<Exercises />
					</Route>
					<Route>
						<NavBar title="" />
						<PageNotFound />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	</>;
}

export default App;
