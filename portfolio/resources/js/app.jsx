import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/layout';


const App = () => {
    return (
      <Layout>
        <div style={{ textAlign: 'center' }}>
          <h2>Welcome to your Laravel React App!</h2>
          <p>This is the main content area inside the layout.</p>
        </div>
      </Layout>
    );
  };
  
  const rootElement = document.getElementById('root');
  
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  } else {
    console.error("Root element not found!");
  }