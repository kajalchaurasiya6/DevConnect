import { ToastContainer } from 'react-toastify';
import Layout from './components/layouts/Layout';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { layoutRoutes, publicRoutes } from './routes/routes';
import ProtectedRoute from './features/auth/ProtectedRoute';
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          {/* Optional standalone route (like login) */}
          {publicRoutes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}

          {/* All routes that use Layout */}
          <Route element={<ProtectedRoute />}>
            <Route element={<ThemeProvider><Layout /></ThemeProvider>}>
              {layoutRoutes.map(({ path, element: Element }) => (
                <Route key={path} path={path} element={<Element />} />
              ))}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
