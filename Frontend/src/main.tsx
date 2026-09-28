import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import FrontendContext from './context/FrontendContext.tsx'

createRoot(document.getElementById('root')!).render(
    <FrontendContext>
        <App />
    </FrontendContext>
)
