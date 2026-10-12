const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");


const reviewController = require("../controllers/reviews.js");

//Reviews ->
//Post(add) rewiews Route ->
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));


//Delete Reviews Route ->
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));


module.exports = router;