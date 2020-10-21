import React from 'react';
import './App.css';
import Header from './components/Header'
import ImageUpload from './components/ImageUpload'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* posts ==>> individual pos */}
      {/* upload */}
      <ImageUpload />
    </div>
  );
}

export default App;