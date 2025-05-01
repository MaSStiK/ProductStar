import React, { useState, useRef } from 'react'
import './ToDoList.css'

interface IToDoListTask {
    id: number;
    text: string;
    completed: boolean;
}

export default function ToDoList() {
    const [tasks, setTasks] = useState<IToDoListTask[]>([
        {id: 1, text: "Изучить React", completed: true},
        {id: 2, text: "Изучить TypeScript", completed: false},
        {id: 3, text: "Изучить Redux", completed: false},
    ])

    // Поле ввода новой задачи
    const newTaskRef = useRef<HTMLInputElement>(null)

    // Добавление задачи
    function addTask(text: string) {
        setTasks([...tasks, {id: Date.now(), text, completed: false}]) // В качестве id передаем время, что бы не возникало повторных id
        newTaskRef.current!.value = "" // Очищаем поле после добавления
    }

    // Функция смены статуса задачи
    function changeTaskStatus(taskId: number) {
        const task = tasks.find(task => task.id === taskId) as IToDoListTask
        if (!task) {
            throw new Error("Task not found");
        }
        task.completed = !task.completed
        setTasks([...tasks])
    }

    // Функция удаления задачи
    function deleteTask(taskId: number) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    return (
        <div className="todo-list__wrapper">
            <h1>Список дел</h1>
            <div className="todo-list__add">
                <input type="text" ref={newTaskRef} placeholder="Новая задача" />
                <button onClick={() => addTask(newTaskRef.current!.value)}>Добавить</button>
            </div>
            <div className="todo-list">
                
                {tasks.map(task =>
                    <div className={`todo-list__item ${task.completed ? "todo-list__item_completed" : ""}`} key={task.id}>
                        <input type="checkbox" checked={task.completed} onChange={() => changeTaskStatus(task.id)} />
                        <p>{task.text}</p>
                        <button onClick={() => deleteTask(task.id)}>Удалить</button>
                    </div>
                )}
            </div>
        </div>
    )
}
