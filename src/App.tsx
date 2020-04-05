import React from 'react';
import Overview from './pages/Overview';
import NavBar from './components/navbar/Navbar';
import { ThemeProvider } from '@material-ui/core';

import {theme} from './resources/theme'

function App() {
  return <>
    <ThemeProvider theme={theme}>
      <NavBar title="Overview"/>
      <Overview />
    </ThemeProvider>
  </>;
}

export default App;
