import React from 'react';
import Overview from './pages/Overview';
import NavBar from './components/navbar/Navbar';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import {theme} from './resources/theme'

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
					<Route>
						<NavBar title="Page not found" />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	</>;
}

export default App;
