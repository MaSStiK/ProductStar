const Todo = require("../models/todo")

module.exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.render("index", { todos })
    } catch (error) {
        console.log("error getTodos", error);
        res.status(500).send(error)
    }
}

module.exports.createTodo = async (req, res) => {
    const { title, description } = req.body
    const newTodo = new Todo({ title, description })

    try {
        await newTodo.save()
        res.redirect("/todos")
    } catch (error) {
        console.log("error createTodo");
        res.status(500).send(error)
    }
}


module.exports.updateTodo = async (req, res) => {
    const { id } = req.params
    const { title, description, completed } = req.body

    try {
        await Todo.findByIdAndUpdate(id, { title, description, completed: completed === "on" })
        res.redirect("/todos")
    } catch (error) {
        console.log("error updateTodo");
        res.status(500).send(error)
    }
}

module.exports.deleteTodo = async (req, res) => {
    const { id } = req.params

    try {
        await Todo.findByIdAndDelete(id)
        res.redirect("/todos")
    } catch (error) {
        console.log("error deleteTodo");
        res.status(500).send(error)
    }
}