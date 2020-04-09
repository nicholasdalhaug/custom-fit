import React from 'react';
import NavBar from './components/navbar/Navbar';
import Overview from './pages/Overview';
import Exercises from './pages/Exercises';
import PageNotFound from './pages/PageNotFound';
import Container from './components/Container'
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import {theme} from './resources/theme'
import 'typeface-roboto';

function App() {
	return <>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<NavBar />
				<Container>
					<ChooseRoute />
				</Container>
			</Router>
		</ThemeProvider>
	</>;
}

const ChooseRoute = () => {
	return <>
		<Switch>
			<Route exact path={process.env.PUBLIC_URL} >
				<Redirect to={process.env.PUBLIC_URL + '/overview'} />
			</Route>
			<Route exact path={process.env.PUBLIC_URL + '/overview'}>
				<Overview />
			</Route>
			<Route exact path={process.env.PUBLIC_URL + '/exercises'}>
				<Exercises />
			</Route>
			<Route>
				<PageNotFound />
			</Route>
		</Switch>
	</>
}

export default App;
