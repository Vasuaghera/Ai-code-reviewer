import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios';

const Demo = () => {
  const [code, setCode] = useState(`function calculateSum(a, b) {
  return a + b;
}

// Example usage
const result = calculateSum(5, 3);
console.log(result);`);

  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    if (!code.trim()) {
      setReview("## ❌ No Code Provided\n\nPlease enter some code to review.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      if (response.data.success) {
        setReview(response.data.review);
      } else {
        setReview("## ❌ Error\n\nReceived an error response from the server.");
      }
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        setReview(`## ❌ Connection Error\n\nCould not connect to the backend server.`);
      } else if (error.response) {
        setReview(`## ❌ Server Error\n\nError ${error.response.status}: ${error.response.statusText}`);
      } else {
        setReview(`## ❌ Unexpected Error\n\n${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="demo" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Try It Yourself
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the power of AI code review. Write or paste your code below and get instant, 
            professional feedback.
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[70vh] min-h-[500px] max-h-[800px]">
            <div className="bg-black rounded-xl relative flex flex-col overflow-hidden">
              <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-700">
                <h3 className="text-white font-semibold">Code Editor</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex-grow p-4 pb-20 overflow-auto min-h-0">
                <Editor
                  value={code}
                  onValueChange={setCode}
                  highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                  padding={10}
                  className="code-editor"
                  style={{ fontFamily: '"Fira code", "Fira Mono", monospace', fontSize: 16 }}
                />
              </div>
              <button
                onClick={reviewCode}
                disabled={isLoading}
                className={`absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-medium cursor-pointer select-none rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Reviewing...</span>
                  </div>
                ) : ( 'Review Code' )}
              </button>
            </div>
            
            <div className="bg-gray-800 rounded-xl flex flex-col overflow-hidden">
              <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-700">
                <h3 className="text-white font-semibold">AI Review Results</h3>
              </div>
              <div className="flex-grow p-6 overflow-y-auto min-h-0">
                {!review ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Ready for Review</h3>
                      <p className="text-sm">Click "Review Code" to get AI-powered feedback</p>
                    </div>
                  </div>
                ) : (
                  <div className="prose-custom">
                    <Markdown rehypePlugins={[rehypeHighlight]} className="text-review-text text-lg leading-relaxed">{review}</Markdown>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo; 