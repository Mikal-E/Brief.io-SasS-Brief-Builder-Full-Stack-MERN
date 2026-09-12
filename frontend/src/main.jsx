import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'

/* UserProvider wraps the app below so that every component, public or protected-dashboard, shares the same one source of truth from UserContext. */

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <BrowserRouter>
    
      <UserProvider>

        <App />

      </UserProvider>
          
    </BrowserRouter>
    
  </StrictMode>,

)
