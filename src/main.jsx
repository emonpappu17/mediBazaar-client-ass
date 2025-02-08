import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRoutes from './routes/AppRoutes.jsx';
import AuthProvider from './context/AuthContext.jsx';
// import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import { ParallaxProvider } from 'react-scroll-parallax';


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ParallaxProvider>
          <AppRoutes></AppRoutes>
          <Toaster />
        </ParallaxProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
)
