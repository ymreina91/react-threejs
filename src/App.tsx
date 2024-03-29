import React from 'react';
import './App.css';
import ThreeScene from './components/ThreeScene';

// Definimos App como un componente funcional de React sin props
const App: React.FC = () => {
  return (
    <>
      <p className="read-the-docs">Example Three.js</p>
      <ThreeScene />
    </>
  );
};

export default App;