import "@fontsource/roboto";
import "@fontsource/fira-code";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import { themeLightOptions } from "./Utils/muiThemeOptions";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./Context/AuthContext";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import Profile from "./Views/Profile";
import { Container } from "@mui/material";
import ProtectedRoute from "./Components/ProtectedRoute";
import Navbar from "./Components/Navbar";

function App() {
  const themeLight: Theme = createTheme(themeLightOptions);

  //TODO should this code be moved to navbar? should there be a useEffect on change of location?
  const location = useLocation();

  const showNavbar = (): boolean => {
    if (location.pathname === "/") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <Container maxWidth="md">
        <AuthContextProvider>
          <div className="App page-transition-settings">
            <header>{showNavbar() && <Navbar />}</header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </AuthContextProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
