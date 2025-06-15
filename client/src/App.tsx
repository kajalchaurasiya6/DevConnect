import Layout from './components/layouts/Layout';
import './index.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
       <BrowserRouter>
      <Layout>
        <Routes>
          <Route  path="/" key={'home'} element={<HomePage />} />
          <Route  path="/profile" key={'profile'} element={<HomePage />} />
          <Route  path="/settings" key={'settings'} element={<HomePage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
