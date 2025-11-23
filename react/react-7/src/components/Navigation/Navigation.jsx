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
                    >Главная</NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/catalog"
                        className={({ isActive }) => isActive ? "button active" : "button"}
                    >Каталог</NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about"
                        className={({ isActive }) => isActive ? "button active" : "button"}
                    >О сайте</NavLink>
                </li>
            </ul>
        </nav>
    )
}
