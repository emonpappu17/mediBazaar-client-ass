import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRoutes from './routes/AppRoutes.jsx';
import AuthProvider from './context/AuthContext.jsx';
// import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRoutes></AppRoutes>
        {/* <ToastContainer></ToastContainer> */}
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
)
