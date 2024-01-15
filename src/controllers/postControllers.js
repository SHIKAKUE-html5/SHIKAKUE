const {
	createUser,
	updateUserById,
	createQuestion,
	updateQuestionById,
} = require("../services/CRUDService")

const postEditUser = async (req, res) => {
	let { id, name, email, city } = req.body

	await updateUserById(id, name, email, city)

	// res.send('User updated successfully');
	res.redirect("/home")
}

const postCreateUser = async (req, res) => {
	// let name = req.body.name;
	// let email = req.body.email;
	// let city = req.body.city;

	let { name, email, city } = req.body

	await createUser(name, email, city)

	// res.send('User created successfully');
	res.redirect("/home")
}

const postCreateQuestion = async (req, res) => {
	let {
		question,
		answer_1,
		answer_2,
		answer_3,
		answer_4,
		correct_answer,
		explain_text,
	} = req.body

	await createQuestion(
		question,
		answer_1,
		answer_2,
		answer_3,
		answer_4,
		correct_answer,
		explain_text
	)
	res.redirect("/create-question")
}

const postEditQuestion = async (req, res) => {
	let {
		id,
		question,
		answer_1,
		answer_2,
		answer_3,
		answer_4,
		correct_answer,
		explain_text,
	} = req.body

	await updateQuestionById(
		id,
		question,
		answer_1,
		answer_2,
		answer_3,
		answer_4,
		correct_answer,
		explain_text
	)

	// res.send('User updated successfully');
	res.redirect("/home")
}

module.exports = {
	postCreateUser,
	postEditUser,
	postCreateQuestion,
	postEditQuestion,
}
