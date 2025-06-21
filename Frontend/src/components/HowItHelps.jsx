const HowItHelps = () => {
  const benefits = [
    {
      title: "For Junior Developers",
      description: "Learn best practices and improve your coding skills with detailed explanations and examples.",
      icon: "🎓",
      color: "blue"
    },
    {
      title: "For Senior Developers",
      description: "Save time on code reviews and focus on architecture and team mentoring.",
      icon: "⚡",
      color: "green"
    },
    {
      title: "For Teams",
      description: "Maintain consistent code quality across your entire codebase and team.",
      icon: "👥",
      color: "purple"
    },
    {
      title: "For Projects",
      description: "Catch bugs early, improve performance, and ensure security best practices.",
      icon: "🛡️",
      color: "red"
    }
  ];

  const useCases = [
    {
      title: "Learning & Development",
      description: "Use AI feedback to understand coding patterns and improve your skills.",
      example: "Get explanations for why certain patterns are recommended"
    },
    {
      title: "Quality Assurance",
      description: "Ensure code quality before deployment and reduce technical debt.",
      example: "Identify potential bugs and security vulnerabilities early"
    }
  ];

  return (
    <section id="how-it-helps" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How AI Code Review Helps You
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you're a solo developer or part of a large team, our AI code reviewer 
            provides value at every level of your development process.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              <div className={`text-5xl mb-4 ${benefit.color === 'blue' ? 'text-blue-400' : benefit.color === 'green' ? 'text-green-400' : benefit.color === 'purple' ? 'text-purple-400' : 'text-red-400'}`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="space-y-12">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Real-World Use Cases
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-white mb-3">
                  {useCase.title}
                </h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                  <p className="text-blue-400 text-sm font-medium">
                    💡 Example: {useCase.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">50%</div>
              <div className="text-gray-300">Faster Development</div>
              <div className="text-gray-500 text-sm">Reduce time spent on code reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300">Fewer Bugs</div>
              <div className="text-gray-500 text-sm">Catch issues before they reach production</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-300">Consistent Quality</div>
              <div className="text-gray-500 text-sm">Maintain standards across your team</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItHelps; 