const express = require("express")
const router = express.Router()
const {
	postDeleteUser,
	postDeleteQuestion,
} = require("../controllers/deleteControllers")

//  router.Method('/route', handler)

router.post("/delete-user/", postDeleteUser)
router.post("/delete-question/", postDeleteQuestion)

module.exports = router
