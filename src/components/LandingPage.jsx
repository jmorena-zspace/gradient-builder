export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          zCentral Tools
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => onNavigate('sidePeek')}
            className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            Side Peek Demo
          </button>
          <button
            onClick={() => onNavigate('gradientBuilder')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            Gradient Builder
          </button>
        </div>
      </div>
    </div>
  );
}

