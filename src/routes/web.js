const express = require("express")
const router = express.Router()
const getRouters = require("./getRouters")
const postRouters = require("./postRouters")
const deleteRouters = require("./deleteRouters")

router.use(getRouters)
router.use(postRouters)
router.use(deleteRouters)

module.exports = router
