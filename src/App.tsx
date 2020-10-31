import React from 'react';
import NavBar from './components/navbar/Navbar';
import Overview from './pages/Overview';
import Exercises from './pages/Exercises';
import PageNotFound from './pages/PageNotFound';
import Container from './components/Container'
import Login from './components/Login'
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

import {theme} from './resources/theme'
import 'typeface-roboto';

function App() {
	return <>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Login>
				<HashRouter basename={process.env.PUBLIC_URL}>
					<NavBar />
					<Container>
							<ChooseRoute />
					</Container>
				</HashRouter>
			</Login>
		</ThemeProvider>
	</>;
}

const ChooseRoute = () => {
	return <>
		<Switch>
			<Route exact path="/" >
				<Redirect to="/overview" />
			</Route>
			<Route exact path="/overview">
				<Overview />
			</Route>
			<Route exact path="/exercises">
				<Exercises />
			</Route>
			<Route>
				<PageNotFound />
			</Route>
		</Switch>
	</>
}

export default App;
