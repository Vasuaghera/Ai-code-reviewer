import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                AI-Powered
                <span className="block text-blue-400">Code Review</span>
                <span className="block text-gray-300 text-2xl md:text-3xl mt-4">
                  Get instant, professional feedback on your code
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Transform your coding experience with our intelligent code reviewer. 
                Get detailed analysis, best practices suggestions, and performance optimizations 
                powered by advanced AI technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/reviewer" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
                Start Reviewing Code
              </Link>
              <a href="#demo" className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 text-center">
                Watch Demo
              </a>
            </div>

          </div>

          {/* Right Content - Code Preview */}
          <div className="relative">
            <div className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-2">code-reviewer.js</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">function</span>
                  <span className="text-yellow-400">calculateSum</span>
                  <span className="text-white">(</span>
                  <span className="text-green-400">a</span>
                  <span className="text-white">,</span>
                  <span className="text-green-400">b</span>
                  <span className="text-white">) {'{'}</span>
                </div>
                <div className="ml-4 text-green-400">return a + b;</div>
                <div className="text-white">{'}'}</div>
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded">
                  <div className="text-green-400 text-sm font-medium">✅ AI Review Complete</div>
                  <div className="text-gray-300 text-xs mt-1">Function follows best practices. Consider adding JSDoc comments.</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 