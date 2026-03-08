import React from 'react';
import { Canvas } from './components/Canvas';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Home Layout Designer</h1>
        <p className="text-gray-600">Design your floor plan with ease</p>
      </header>
      <main className="w-full max-w-5xl">
        <Canvas />
      </main>
    </div>
  );
}

export default App;
