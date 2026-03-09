import React from 'react';
import { Canvas } from './components/Canvas';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Home Layout Designer</h1>
        <p className="text-gray-600 text-center">v0.1.0 - Initial Canvas Setup</p>
      </header>
      <main>
        <Canvas />
      </main>
    </div>
  );
}

export default App;
