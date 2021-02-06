import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/Routes'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        logout={logout}
      />
      <Footer />
    </div>
  );
}

export default App;
