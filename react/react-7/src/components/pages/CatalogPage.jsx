import { useState, useEffect, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { debounce } from "lodash"
import { mockFetch } from "../utils/api"
import Catalog from "../Catalog/Catalog"
import Loader from "../Loader/Loader"

function ShowLoader({ isLoading }) {
    if (isLoading) return <Loader />
    return <p>Ничего не найдено</p>
}

export default function CatalogPage() {
    const [gamesList, setGamesList] = useState([])
    const [gamesListIsLoading, setGamesListIsLoading] = useState(false)
    const [programsList, setProgramsList] = useState([])
    const [programsListIsLoading, setProgramsListIsLoading] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams()
    const searchFromQuery = searchParams.get("query")
    const [query, setQuery] = useState(searchFromQuery || "")

    // Загрузка данных по поиску
    const fetchData = useMemo(() => debounce((request) => {
        setGamesList([])
        setGamesListIsLoading(true)
        mockFetch("/games", {search: request}).then(data => {
            setGamesList(data)
            setGamesListIsLoading(false)
        })

        setProgramsList([])
        setProgramsListIsLoading(true)
        mockFetch("/programs", {search: request}).then(data => {
            setProgramsList(data)
            setProgramsListIsLoading(false)
        })
    }, 500), [])

    // Установка строки поиска
    useEffect(() => {
        fetchData(query)

        setSearchParams((params) => {
            if (query) {
                params.set("query", query)
            } else {
                params.delete("query")
            }
            return params
        })
    }, [query])

    return (
        <article>
            <h1>Каталог игр и программ</h1>
            <section>
                <p>Поиск</p>
                <input
                    type="text"
                    placeholder="Начните вводить название"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />

                <section className="home-section">
                    <h2>Игры</h2>
                    {gamesList.length !== 0
                        ? <Catalog data={gamesList} />
                        : <ShowLoader isLoading={gamesListIsLoading} />
                    }
                </section>
    
                <section className="home-section">
                    <h2>Программы</h2>
                    {programsList.length !== 0
                        ? <Catalog data={programsList} />
                        : <ShowLoader isLoading={programsListIsLoading} />
                    }
                </section>
            </section>
        </article>
    )
}