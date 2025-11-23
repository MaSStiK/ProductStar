import { Link } from "react-router-dom"

export default function ErrorPage({ errorCode="404" }) {
    return (
        <article>
            <h1>Error {errorCode}</h1>
            <p>Страница не найдена</p>
            <Link className="button" to="/">На главную</Link>
        </article>
    )
}
