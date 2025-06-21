const Features = () => {
  const features = [
    {
      icon: "🔍",
      title: "Comprehensive Analysis",
      description: "Get detailed code analysis covering quality, performance, security, and best practices in one comprehensive review."
    },
    {
      icon: "🎯",
      title: "Best Practices",
      description: "Learn industry-standard coding practices, SOLID principles, and modern development patterns."
    },
    {
      icon: "📚",
      title: "Educational Insights",
      description: "Understand why changes are suggested with detailed explanations and real-world examples."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features for Better Code
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our AI-powered code reviewer provides comprehensive analysis and actionable insights 
            to help you write better, more maintainable code.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-gray-500"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-700 rounded-xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Powered by Advanced AI Technology
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our code reviewer uses Google Gemini AI with 7+ years of development experience 
              to provide professional-grade feedback that helps you grow as a developer.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Real-time Analysis</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Multiple Languages</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>24/7 Availability</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 