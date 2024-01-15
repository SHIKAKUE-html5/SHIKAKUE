const express = require("express")
const router = express.Router()
const {
	postCreateUser,
	postEditUser,
	postCreateQuestion,
	postEditQuestion,
} = require("../controllers/postControllers")

//  router.Method('/route', handler)

router.post("/create-user", postCreateUser)
router.post("/edit-user", postEditUser)
router.post("/create-question", postCreateQuestion)
router.post("/edit-question", postEditQuestion)

module.exports = router
