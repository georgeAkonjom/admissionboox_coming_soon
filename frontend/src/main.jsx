import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import Onboard from './routes/Onboard.jsx'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import SchoolInfoForm from './routes/Onboard.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App />, },
  {
    path: "/onboard", element: <SchoolInfoForm />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router} />
  </StrictMode>,
)
