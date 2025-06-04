import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/fonts.css'
import { HashRouter } from 'react-router-dom';
import { initGA } from './utils/analytics';

// Initialize Google Analytics
initGA();

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <App />
    </HashRouter>
);
