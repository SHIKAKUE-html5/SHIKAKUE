const {
	getAllUsers,
	getUserById,
	getAllQuestion,
	getQuestionById,
} = require("../services/CRUDService")

const getIndexPage = (req, res) => {
	res.render("index.ejs")
}
const getEditUser = async (req, res) => {
	const userId = req.params.id
	let user = await getUserById(userId)
	res.render("edit.ejs", { user: user })
}

const getHomePage = async (req, res) => {
	let result = await getAllUsers()
	let result2 = await getAllQuestion()
	res.render("home.ejs", { users: result, Quiz: result2 })
}

const getCreateUser = (req, res) => {
	res.render("create-user.ejs")
}

const getDeleteUser = async (req, res) => {
	const userId = req.params.id
	let user = await getUserById(userId)
	res.render("delete-user.ejs", { user: user })
}

const getCreateQuestion = (req, res) => {
	res.render("create-question.ejs")
}

const getEditQuestion = async (req, res) => {
	const questionId = req.params.id
	let Quiz = await getQuestionById(questionId)
	res.render("edit-question.ejs", { Quiz: Quiz })
}

const getDeleteQuestion = async (req, res) => {
	const questionId = req.params.id
	let Quiz = await getQuestionById(questionId)
	res.render("delete-question.ejs", { Quiz: Quiz })
}

const getQuizStartPage = (req, res) => {
	res.render("quiz-start.ejs")
}

const getQuizPage = (req, res) => {
	res.render("quiz.ejs")
}

const getQuizTopPage = (req, res) => {
	res.render("quiz-top.ejs")
}

const getGeneralPage = (req, res) => {
	res.render("general.ejs")
}

const getReviewPage = (req, res) => {
	res.render("review.ejs")
}

const getFavoritePage = (req, res) => {
	res.render("favorite.ejs")
}

const getLowRatePage = (req, res) => {
	res.render("low-rate.ejs")
}

const getIncorrectPage = (req, res) => {
	res.render("incorrect.ejs")
}

const getOriginalPage = (req, res) => {
	res.render("original.ejs")
}

const getCreatePage = (req, res) => {
	res.render("create.ejs")
}

const getAddPage = (req, res) => {
	res.render("add.ejs")
}

const getSelectPage = (req, res) => {
	res.render("select.ejs")
}
module.exports = {
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
}
