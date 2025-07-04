import { ToastContainer } from 'react-toastify';
import Layout from './components/layouts/Layout';
import { ThemeProvider } from './context/ThemeContext';
import Login from './features/auth/components/Login';
import Signup from './features/auth/components/Signup';
import './index.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          {/* Optional standalone route (like login) */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* All routes that use Layout */}
          <Route element={<ThemeProvider><Layout /></ThemeProvider>}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<HomePage />} />
            <Route path="/settings" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
