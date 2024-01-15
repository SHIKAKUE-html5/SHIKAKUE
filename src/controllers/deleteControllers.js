const {
	deleteUserById,
	deleteQuestionById,
} = require("../services/CRUDService")

const postDeleteUser = async (req, res) => {
	const id = req.body.id
	await deleteUserById(id)
	res.redirect("/home")
}

const postDeleteQuestion = async (req, res) => {
	const id = req.body.id
	await deleteQuestionById(id)
	res.redirect("/home")
}

module.exports = {
	postDeleteUser,
	postDeleteQuestion,
}
