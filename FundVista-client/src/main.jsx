import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import UserProvider from './provider/UserProvider.jsx'
import { Toaster } from 'react-hot-toast'
import Modal from 'react-modal'
import ThemeProvider from './provider/ThemeProvider.jsx'

Modal.setAppElement('#root')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <Toaster position='top-center' />
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
)
