import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { theme } from './theme';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Restaurant from './pages/Restaurant';
import Orders from './pages/Orders';
import Drivers from './pages/Drivers';
import Users from './pages/Users';
import Settings from './pages/Settings';

// Components
import MainLayout from './layouts/MainLayout';
import PrivateRoute from './components/PrivateRoute';
import { AppProvider } from './context/AppContext';
import Overview from './pages/overview';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}>
          <AppProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="*"
                element={
                     <MainLayout>
                       <Routes>
                        <Route index element={<Dashboard />} />
                        <Route path="restaurant" element={<Restaurant />} />
                        <Route path="overview" element={<Overview />} />

                        <Route path="orders" element={<Orders />} />
                        <Route path="drivers" element={<Drivers />} />
                        <Route path="users" element={<Users />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                      </Routes>
                    </MainLayout>
                }
              />
            </Routes>
          </AppProvider>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;