import { useEffect, useState } from "react"
import { mockFetch } from "../utils/api"
import Catalog from "../Catalog/Catalog"
import Loader from "../Loader/Loader"

export default function HomePage() {
    const [gamesList, setGamesList] = useState([])
    const [programsList, setProgramsList] = useState([])

    useEffect(() => {
        mockFetch("/games").then(data => setGamesList(data))
        mockFetch("/programs").then(data => setProgramsList(data))
    }, [])

    return (
        <article>
            <h1>Каталог игр и программ</h1>
            <section className="home-section">
                <h2>Игры</h2>
                {gamesList.length !== 0
                    ? <Catalog data={gamesList} />
                    : <Loader />
                }
            </section>

            <section className="home-section">
                <h2>Программы</h2>
                {programsList.length !== 0
                    ? <Catalog data={programsList} />
                    : <Loader />
                }
            </section>
        </article>
    )
}
