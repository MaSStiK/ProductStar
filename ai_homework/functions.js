const fs = require('fs');

function readTodos() {
    let todos = [];
    const data = fs.readFileSync('./storage.json', 'utf8');
    const jsonData = JSON.parse(data);
    todos.push(...jsonData);
    return todos;
}

/**
 * Clears the todo items by overwriting the contents of the storage.json file with an empty array.
 * @function clearTodoItems
 * @returns {void}
 */
function clearTodoItems() {
    return new Promise((resolve, reject) => {
        fs.writeFile('./storage.json', '[]', 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                console.log('Data cleared from storage.json');
                resolve();
            }
        });
    });
}

function addTodoItem(todo) {
    let todos = [];
    fs.readFile('./storage.json', 'utf8', (err, data) => {
        if (err) {
            return;
        }
        const jsonData = JSON.parse(data);
        todos.push(...jsonData);
        todos.push(todo);
        fs.writeFile('./storage.json', JSON.stringify(todos), 'utf8', (err) => {
            if (err) {
                return;
            }
            console.log('Data saved to storage.json');
        });
    });
}


function deleteTodoItem(id) {
    return new Promise((resolve, reject) => {
        fs.readFile('./storage.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            let todos = JSON.parse(data);
            todos = todos.filter(todo => todo.id !== id);
            fs.writeFile('./storage.json', JSON.stringify(todos), 'utf8', (err) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(`Todo item with id ${id} deleted`);
                    resolve();
                }
            });
        });
    });
}

module.exports = {addTodoItem, clearTodoItems, readTodos, deleteTodoItem};
