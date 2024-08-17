import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import FirebaseProvider from './providers/FirebaseProvider';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </StrictMode>,
);