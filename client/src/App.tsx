import "@fontsource/roboto";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import { themeLightOptions } from "./utils/muiThemeOptions";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./Context/AuthContext";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import Profile from "./Views/Profile";

function App() {
  const themeLight : Theme = createTheme(themeLightOptions);

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <AuthContextProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
