import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './style.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: "80px", minHeight: "calc(100vh - 400px)" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
