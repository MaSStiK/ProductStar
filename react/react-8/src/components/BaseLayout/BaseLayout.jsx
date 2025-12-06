import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./BaseLayout.css";

export default function BaseLayout() {
    return (
        <div className="base-layout">
            <Header />
            <article>
                <Outlet />
            </article>
        </div>
    )
}
