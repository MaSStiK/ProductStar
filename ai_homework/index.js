const express = require('express');
const fs = require('fs');
const { addTodoItem, clearTodoItems, readTodos, deleteTodoItem } = require('./functions');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    fs.readFile('./home.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred');
        }
        res.send(data);
    });
});

// These functions are now imported from './functions'

app.post('/todos', (req, res) => {
    const { title } = req.body;
    const todos = readTodos();
    const newTodo = {
        id: generateUniqueId(),
        title,
        completed: false
    };
    todos.push(newTodo);
    saveTodos(todos);
    res.status(201).json(newTodo);
});

app.get('/todos', (req, res) => {
    const todos = readTodos();
    res.json(todos);
});

app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const todos = readTodos();
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
        res.status(404).send('Todo not found');
        return;
    }
    todos[todoIndex].completed = true;
    saveTodos(todos);
    res.send('Todo marked as completed');
});

app.put('/todos/:id/incomplete', (req, res) => {
    const { id } = req.params;
    const todos = readTodos();
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
        res.status(404).send('Todo not found');
        return;
    }
    todos[todoIndex].completed = false;
    saveTodos(todos);
    res.send('Todo marked as incomplete');
});

function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
}

function saveTodos(todos) {
    fs.writeFileSync('./storage.json', JSON.stringify(todos), 'utf8');
}

app.delete('/todo/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await deleteTodoItem(id);
        res.status(200).send('Todo item deleted successfully');
    } catch (error) {
        res.status(500).send('An error occurred while deleting the todo item');
    }
});

app.listen(3000, () => console.log('Server is running on port http://localhost:3000'));
