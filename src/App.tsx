import React from 'react';
import { Canvas } from './components/Canvas';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Home Layout Designer</h1>
      <main className="w-full max-w-5xl">
        <Canvas />
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h2 className="font-semibold">Controls</h2>
          <p className="text-sm text-gray-600">Canvas initialized. Ready for room placement.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
