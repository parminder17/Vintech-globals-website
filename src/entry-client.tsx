import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Router import karo
import App from './App';
import './index.css';

// 2. App nu <BrowserRouter> naal wrap karo
hydrateRoot(
  document.getElementById('root')!, 
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
