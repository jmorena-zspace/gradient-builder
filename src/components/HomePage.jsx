export default function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-white mb-12">Welcome</h1>
        <div className="space-y-4">
          <button
            onClick={() => onNavigate('gradient-builder')}
            className="block w-64 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-all duration-300 text-lg"
          >
            Gradient Builder
          </button>
          <button
            onClick={() => onNavigate('side-peek')}
            className="block w-64 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-300 text-lg"
          >
            Side Peek Demo
          </button>
        </div>
      </div>
    </div>
  );
}


