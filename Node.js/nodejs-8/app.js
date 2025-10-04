const express = require("express")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/todo-list").then(() => {
    console.log("Connected to  MongoDB");
}).catch(error => {
    console.log("MongoDB connection error:", error);
})

const db = mongoose.connection
let todos = []

const getTodos = async () => {
    try {
        todos = await db.collection("todos").find().toArray()
        console.log("Todos:", todos);
        
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}

const createTodo = async (title, description) => {
    const todo = {
        title,
        description,
        completed: false
    }

    try {
        const result = await db.collection("todos").insertOne(todo)
        console.log("Todo created:", result.insertedId);
        getTodos()
    } catch (error) {
        console.error("Error creating todos:", error);
    }
}

// createTodo("Изучить Express", "Начнем с MongoDB")

const updateTodo = async (id, updates) => {
    try {
        const result = await db.collection("todos").updateOne(
            {_id: new mongoose.Types.ObjectId(id)},
            { $set: updates}
        )
        console.log("Todo updated:", result.modifiedCount);
        getTodos()
    } catch (error) {
        console.error("Error updating todos:", error);
    }
}

// updateTodo("68e1847d4d2d05b7e05c6a41", { completed: true })

const deleteTodo = async (id) => {
    try {
        const result = await db.collection("todos").deleteOne({ _id: new mongoose.Types.ObjectId(id) })
        console.log("Todo deleted:", result.deletedCount);
        getTodos()
    } catch (error) {
        console.error("Error deleting todos:", error);
    }
}

deleteTodo("68e1847d4d2d05b7e05c6a41")