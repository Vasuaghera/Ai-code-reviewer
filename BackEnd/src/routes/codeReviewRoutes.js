const express = require('express');
const codeReviewController = require("../controllers/codeReviewController")

const router = express.Router();


router.post("/get-review", codeReviewController.getReview)


module.exports = router;    