import React from 'react';
import './App.css';
import UserProfile from "./components/UserProfile/UserProfile";
import ToDoList from "./components/ToDoList/ToDoList"

function App() {
    return (
        <div className="App">
            <UserProfile />
            <ToDoList />
        </div>
    );
}

export default App;
