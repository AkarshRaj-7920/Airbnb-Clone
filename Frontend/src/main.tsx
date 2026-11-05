import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import FrontendContext from './context/FrontendContext.tsx'

createRoot(document.getElementById('root')!).render(
    <FrontendContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FrontendContext>
)
