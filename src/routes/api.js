const express = require("express")
const router = express.Router()
const connection = require("../config/database")

router.get("/api/questions", async (req, res) => {
	try {
		const query = "SELECT * FROM Quiz ORDER BY RAND() LIMIT 10"
		const [rows] = await connection.execute(query)

		const questions = rows.map((row) => ({
			question: row.question,
			answers: [row.answer_1, row.answer_2, row.answer_3, row.answer_4],
			correct_answer: row.correct_answer,
			explain: row.explain_text,
		}))

		res.json(questions)
	} catch (error) {
		console.error("Error querying database:", error)
		res.status(500).send("Internal Server Error")
	}
})

module.exports = router
