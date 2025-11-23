import { useLoaderData, Await, Navigate, Link } from "react-router-dom"
import { Suspense } from "react"
import { mockFetch } from "../utils/api"
import PageLoader from "../Loader/PageLoader"

export function ItemLoader({ params: { category, id } }) {
    const item = mockFetch(`/${category}/${id}`)
    return { item }
}

export const ItemDetails = () => {
    const { item } = useLoaderData()
    
    return (
        <article>
            <Suspense fallback={<PageLoader />}>
                <Await resolve={item}>
                    {(app) => {
                        // Если ошибка поиска - перенаправляем на страницу с ошибкой
                        if (app === undefined || app.error) return <Navigate to="/error" />
                        
                        return <section className="item-section flex-row">
                            <img src={app.imageUrl} alt={app.title} />
                            <div className="item-info flex-col">
                                <h1>{app.title}</h1>
                                <p>Категория: {app.category}</p>
                                <p>{app.description}</p>
                                <Link className="button" to="./download">Скачать</Link>
                            </div>
                        </section>
                    }}
                </Await>
            </Suspense>
        </article>
    )
}
