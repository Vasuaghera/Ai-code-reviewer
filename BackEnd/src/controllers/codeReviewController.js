const geminiAIService = require("../services/geminiAIService")

module.exports.getReview = async (req, res) => {
    try {
    const code = req.body.code;

    if (!code) {
            return res.status(400).json({
                error: "Code is required",
                message: "Please provide code in the request body"
            });
        }

        if (typeof code !== 'string') {
            return res.status(400).json({
                error: "Invalid code format",
                message: "Code must be a string"
            });
    }

        if (code.trim().length === 0) {
            return res.status(400).json({
                error: "Empty code",
                message: "Please provide non-empty code for review"
            });
        }

        console.log("Processing code review request...");
        const response = await geminiAIService(code);

        res.json({
            success: true,
            review: response
        });

    } catch (error) {
        console.error("Error in code review controller:", error);
        res.status(500).json({
            error: "Internal server error",
            message: "An error occurred while processing your code review request",
            details: error.message
        });
    }
}