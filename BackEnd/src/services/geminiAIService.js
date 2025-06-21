const { GoogleGenerativeAI } = require("@google/generative-ai");

// Check if API key is available
if (!process.env.GOOGLE_GEMINI_KEY) {
    console.warn("⚠️  GOOGLE_GEMINI_KEY not found in environment variables. Using mock response.");
}

const genAI = process.env.GOOGLE_GEMINI_KEY ? new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY) : null;
const model = genAI ? genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `
You are a helpful Senior Code Reviewer with 7+ years of experience. Your job is to review code and help developers improve it.

## Your Review Process:
1. Look at the code carefully
2. Find problems (bugs, security issues, performance problems)
3. Suggest better ways to write the code
4. Explain everything in simple, easy-to-understand language
5. Always be encouraging and helpful

## What to Check:
- **Bugs & Errors**: Things that might break or cause problems
- **Security**: Ways hackers could attack the code
- **Performance**: Ways to make code run faster
- **Readability**: Make code easier to read and understand
- **Best Practices**: Follow good coding rules

## Response Format (Always follow this structure):

### 📊 **Quick Summary**
- Programming Language: [language name]
- Code Quality: [Good/Okay/Needs Work]
- Main Issues Found: [number]

### ❌ **Problems Found**
[List each problem clearly with simple explanation]

### ✅ **How to Fix It**
\`\`\`[language]
// Show the improved code here with comments explaining what you changed
\`\`\`

### 💡 **Why These Changes Help**
[Explain in simple words why your suggestions are better]

### 🎯 **What to Do Next**
1. [Most important fix first]
2. [Second priority]
3. [Third priority]

### 👍 **What You Did Well**
[Always mention at least one good thing about the code]

## Important Rules:
- Use simple, everyday language (avoid technical jargon when possible)
- Explain WHY something is wrong, not just WHAT is wrong
- Give specific examples and code fixes
- Be encouraging - focus on helping, not criticizing
- If code is already good, say so and suggest small improvements
- Keep explanations short but clear
- Use emojis to make it friendly and easy to scan

Remember: Your goal is to help developers learn and write better code, not to make them feel bad about their current code.
    `
}) : null;

async function generateContent(prompt) {
    // If no API key is configured, return a mock response
    if (!process.env.GOOGLE_GEMINI_KEY || !model) {
        return `# 🤖 Code Review Demo Response

## 📊 Quick Summary
- Programming Language: Demo Mode
- Code Quality: Cannot Analyze
- Main Issues Found: API Key Missing

## ❌ Problems Found
**Missing API Configuration**: The Google Gemini API key is not set up, so I can't review your code right now.

## ✅ How to Fix It
To get real AI code reviews, you need to:

1. **Get an API Key**:
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a free account
   - Generate an API key

2. **Set Up Your Environment**:
   \`\`\`
   Create a file called .env in your BackEnd folder
   Add this line: GOOGLE_GEMINI_KEY=your_api_key_here
   Restart your server
   \`\`\`

## 💡 Why This Setup is Important
- The API key lets your app talk to Google's AI
- Without it, you only get demo responses
- It's free for basic usage

## 🎯 What to Do Next
1. **Get your API key** (most important)
2. **Add it to your .env file**
3. **Test with real code**

## 👍 What You Did Well
- Good error handling with fallback demo response
- Clear console warnings when API key is missing
- Professional code structure

---
*This is a demo response. Set up your API key for real AI-powered code reviews!*`;
    }

    try {
        const result = await model.generateContent(prompt);
        console.log("✅ AI Response received:", result.response.text().substring(0, 100) + "...");
        return result.response.text();
    } catch (error) {
        console.error("❌ Error calling Gemini AI:", error);
        return `# ❌ Code Review Error

## 📊 Quick Summary
- Status: API Error
- Issue: Cannot connect to AI service

## ❌ Problems Found
**API Connection Failed**: ${error.message}

## ✅ How to Fix It
\`\`\`
Possible solutions:
1. Check if your API key is correct
2. Make sure you have internet connection
3. Wait a moment and try again
4. Check if Google AI service is working
\`\`\`

## 💡 Why This Happened
- Your API key might be wrong or expired
- Google's AI service might be temporarily down
- Network connection issues

## 🎯 What to Do Next
1. **Double-check your API key** in the .env file
2. **Test your internet connection**
3. **Try again in a few minutes**
4. **Contact support** if problem continues

---
*Don't worry! Technical issues happen. Try the solutions above and you'll be back to reviewing code soon.*`;
    }
}

module.exports = generateContent;