import { Canvas } from './components/Canvas';

function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-slate-50 overflow-hidden">
      <header className="bg-white border-b border-slate-200 p-4 shadow-sm">
        <h1 className="text-xl font-bold text-slate-800">Home Layout Designer</h1>
      </header>
      <main className="flex-1 relative">
        <Canvas />
      </main>
    </div>
  );
}

export default App;
