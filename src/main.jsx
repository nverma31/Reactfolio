import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/fonts.css'
import { BrowserRouter } from 'react-router-dom';

const basename = import.meta.env.PROD ? '/Reactfolio' : '';

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename={basename}>
        <App />
    </BrowserRouter>
);
