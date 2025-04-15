import './bootstrap';
import './path/to/global.css'; // Import the global CSS
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <Home />
        </React.StrictMode>
    );
}
