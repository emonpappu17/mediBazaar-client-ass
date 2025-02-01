import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AppRoutes from './routes/AppRoutes.jsx';
import AuthProvider from './context/AuthContext.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppRoutes></AppRoutes>
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>
)
