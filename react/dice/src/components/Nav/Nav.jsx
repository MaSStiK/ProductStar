import { Routes, Link, Route, BrowserRouter as Router } from "react-router-dom";
import Admin from "../../pages/Admin/Admin";
import Home from "../../pages/Home/Home";

export default function Nav() {
    return (
        <Router>
            <nav>
            <ul>
                <li>
                <Link to="/">Dice</Link>
                </li>
                <li>
                <Link to="/home">Home</Link>
                </li>
                <li>
                <Link to="/admin">Admin</Link>
                </li>
            </ul>
            </nav>

            <Routes>
                <Route path="/" element={<div>Dice</div>} />
                <Route path="*" element={<div>Error 404</div>} />
                <Route path="/home" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
      </Router>
    )
}
