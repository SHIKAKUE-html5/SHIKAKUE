const express = require("express")
const router = express.Router()
const {
	getIndexPage,
	getHomePage,
	getCreateUser,
	getEditUser,
	getDeleteUser,
	getCreateQuestion,
	getEditQuestion,
	getDeleteQuestion,
	getQuizStartPage,
	getQuizPage,
	getQuizTopPage,
	getGeneralPage,
	getReviewPage,
	getFavoritePage,
	getLowRatePage,
	getIncorrectPage,
	getOriginalPage,
	getCreatePage,
	getAddPage,
	getSelectPage,
} = require("../controllers/getControllers")

router.get("/", getIndexPage)
router.get("/home", getHomePage)
router.get("/create-user", getCreateUser)
router.get("/edit-user/:id", getEditUser)
router.get("/delete-user/:id", getDeleteUser)
router.get("/create-question", getCreateQuestion)
router.get("/edit-question/:id", getEditQuestion)
router.get("/delete-question/:id", getDeleteQuestion)
router.get("/quiz-start", getQuizStartPage)
router.get("/quiz", getQuizPage)
router.get("/quiz-top", getQuizTopPage)
router.get("/general", getGeneralPage)
router.get("/review", getReviewPage)
router.get("/favorite", getFavoritePage)
router.get("/low-rate", getLowRatePage)
router.get("/incorrect", getIncorrectPage)
router.get("/original", getOriginalPage)
router.get("/create", getCreatePage)
router.get("/add", getAddPage)
router.get("/select", getSelectPage)

module.exports = router
