import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink 
                        to="/"
                        className={({ isActive }) => isActive ? "button active" : "button"}
                    >Чат</NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/login"
                        className={({ isActive }) => isActive ? "button active" : "button"}
                    >Вход</NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/registration"
                        className={({ isActive }) => isActive ? "button active" : "button"}
                    >Регистрация</NavLink>
                </li>
            </ul>
        </nav>
    )
}