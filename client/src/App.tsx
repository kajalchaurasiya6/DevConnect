import Layout from './components/layouts/Layout';
import Login from './features/auth/Login';
import './index.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
 <BrowserRouter>
      <Routes>
        {/* Optional standalone route (like login) */}
        <Route path="/" element={<Login />} />

        {/* All routes that use Layout */}
        <Route element={<Layout/>}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<HomePage />} />
          <Route path="/settings" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
