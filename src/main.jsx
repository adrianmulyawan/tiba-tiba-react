import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App.jsx'
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import NotFound from './Pages/notfound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
