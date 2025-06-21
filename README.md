# AI Code Reviewer

A full-stack web application that uses Google Gemini AI to provide intelligent code review suggestions. Built with React, Node.js, and Express.

## 🚀 Features

- **AI-Powered Code Analysis**: Leverages Google Gemini AI for intelligent code review
- **Real-time Feedback**: Get instant suggestions and improvements for your code
- **Modern UI**: Clean, responsive interface built with Tailwind CSS
- **Multi-page Structure**: Separate landing page and dedicated reviewer interface
- **Error Handling**: Robust error handling for network issues and API failures
- **Cross-platform**: Works on any modern web browser

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Google Gemini AI** - AI-powered code analysis

## 📋 Prerequisites

Before running this application, you'll need:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Google Gemini API Key** (optional - app works with mock responses if not provided)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Vasuaghera/Ai-code-reviewer.git
cd Ai-code-reviewer
```

### 2. Install Dependencies

Install backend dependencies:
```bash
cd BackEnd
npm install
```

Install frontend dependencies:
```bash
cd ../Frontend
npm install
```

### 3. Environment Setup

Create a `.env` file in the `BackEnd` directory:
```bash
cd ../BackEnd
touch .env
```

Add your Google Gemini API key (optional):
```env
GOOGLE_GEMINI_KEY=your_api_key_here
```

**Note**: If you don't provide an API key, the application will use mock responses for demonstration purposes.

### 4. Running the Application

#### Start the Backend Server
```bash
cd BackEnd
npm start
```

The backend server will start on `http://localhost:3001`

#### Start the Frontend Development Server
```bash
cd Frontend
npm run dev
```

The frontend application will start on `http://localhost:5173`

## 📖 How to Use

1. **Navigate to the Application**: Open your browser and go to `http://localhost:5173`

2. **Choose Your Path**:
   - **Home Page**: View the landing page with features and demo
   - **Reviewer Page**: Go directly to the full-screen code review tool

3. **Submit Code for Review**:
   - Paste your code in the input area
   - Click "Get Review" to receive AI-powered feedback
   - View suggestions, improvements, and potential issues

4. **Review Results**: The AI will provide:
   - Code quality suggestions
   - Performance improvements
   - Security considerations
   - Best practices recommendations

## 🔧 Configuration

### Google Gemini API Setup

To use the full AI capabilities:

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add the key to your `.env` file:
   ```env
   GOOGLE_GEMINI_KEY=your_api_key_here
   ```

### Customization

- **Styling**: Modify `Frontend/tailwind.config.js` for theme customization
- **API Endpoints**: Update routes in `BackEnd/src/routes/codeReviewRoutes.js`
- **AI Service**: Customize AI prompts in `BackEnd/src/services/geminiAIService.js`

## 📁 Project Structure

```
code-review-main/
├── BackEnd/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── codeReviewController.js
│   │   ├── routes/
│   │   │   └── codeReviewRoutes.js
│   │   ├── services/
│   │   │   └── geminiAIService.js
│   │   └── expressServer.js
│   ├── package.json
│   └── serverEntry.js
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Demo.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── HowItHelps.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   └── ReviewerPage.jsx
│   │   ├── CodeReviewApp.jsx
│   │   └── appEntry.jsx
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## 🐛 Troubleshooting

### Common Issues

1. **Connection Refused Error**:
   - Ensure the backend server is running on port 3001
   - Check if the frontend is configured to connect to the correct backend URL

2. **API Key Issues**:
   - Verify your Google Gemini API key is valid
   - Check that the `.env` file is in the correct location
   - Restart the backend server after adding the API key

3. **Styling Issues**:
   - Ensure Tailwind CSS is properly configured
   - Check that `postcss.config.cjs` exists and is correctly named

### Development Tips

- Use the browser's developer tools to check for console errors
- Monitor the backend server logs for API-related issues
- The application gracefully handles missing API keys with mock responses

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for providing the AI capabilities
- **React** and **Vite** for the modern development experience
- **Tailwind CSS** for the beautiful styling framework

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Review the project structure and configuration
3. Open an issue on GitHub with detailed information about your problem

---

**Happy Coding! 🚀** 