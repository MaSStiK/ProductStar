const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todoController.js")

router.get("/", todoController.getTodos)
router.post("/", todoController.createTodo)
router.put("/update/:id", todoController.updateTodo)
router.delete("/delete/:id", todoController.deleteTodo)

module.exports = router