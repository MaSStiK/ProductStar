import Navigation from "../Navigation/Navigation"

import "./Header.css";

export default function Header() {
    console.log("Header Mounted");
    
    return (
        <header>
            <p>App Catalog</p>
            <Navigation />
        </header>
    )
}
