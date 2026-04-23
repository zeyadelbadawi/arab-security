import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { loadRuntimeConfig } from './lib/config.ts';

async function initializeApp() {
  await loadRuntimeConfig();
  createRoot(document.getElementById('root')!).render(<App />);
}

initializeApp();