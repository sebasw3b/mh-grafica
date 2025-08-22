import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Styles
import './index.css'

// Pages
import Homepage from './pages/homepage.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
)
