import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.jsx'
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
