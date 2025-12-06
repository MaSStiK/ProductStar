import { Link } from "react-router-dom"

export default function ErrorPage() {
    return (
        <section className="flex-col">
            <h1>Error 404</h1>
            <p>Not Found</p>
            <Link className="button" to="/">На главную</Link>
        </section>
    )
}
