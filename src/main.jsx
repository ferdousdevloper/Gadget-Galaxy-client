import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Routes.jsx'
import FirebaseAuthProvider from './FirebaseAuthProvider/FirebaseAuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseAuthProvider>
    <RouterProvider router={Router} />
    </FirebaseAuthProvider>
  </StrictMode>,
)
