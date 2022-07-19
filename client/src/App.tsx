import React from 'react';
import "@fontsource/roboto";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { themeLightSettings } from './utils/muiThemeSettings';
// import logo from './logo.svg';
import './App.css';

function App() {
  const themeLight = createTheme (themeLightSettings);

  return (
    <ThemeProvider theme= {themeLight}>
    <CssBaseline />
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
