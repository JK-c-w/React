import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  AuthContent from './components/Auth/AuthContent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContent>
      <App />
    </AuthContent>
  </StrictMode>,
)
